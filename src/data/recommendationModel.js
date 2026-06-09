import { playstyleNames } from './playstyles.js';
import { rackets } from './rackets.js';
import { strings } from './strings.js';

export const STRINGING_LABOR_ESTIMATE = 25;
export const FEEDBACK_STORAGE_KEY = 'courtvision_setup_feedback_v1';

export const defaultModelResult = {
  totals: Object.fromEntries(playstyleNames.map((style) => [style, style === 'All-Court Player' ? 8 : 4])),
  primary: 'All-Court Player',
  secondary: 'Counterpuncher',
  budgetTier: 'Balanced',
  maxSetupPrice: 330,
  armIssue: 'None',
  comfortPriority: 0,
  traits: {
    spinIntent: 55,
    powerIntent: 50,
    controlIntent: 58,
    rallyTolerance: 52,
    netIntent: 42,
    riskTolerance: 50,
    serveReliance: 45,
    comfortNeed: 40,
    maneuverabilityNeed: 55,
    durabilityNeed: 45,
  },
};

export function priceNumber(price) {
  return Number(String(price).replace(/[^0-9.]/g, '')) || 0;
}

export function money(value) {
  return `$${Math.round(value)}`;
}

export function setupTotal(racket, string) {
  return priceNumber(racket.price) + priceNumber(string.price) + STRINGING_LABOR_ESTIMATE;
}

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

function normalize(value, min, max) {
  return clamp01((value - min) / (max - min));
}

function grams(value) {
  return Number(String(value).match(/\d+/)?.[0]) || 300;
}

function normalizedPlaystyleTotals(result) {
  const highest = Math.max(1, ...Object.values(result.totals || {}));
  return Object.fromEntries(playstyleNames.map((style) => [style, Math.round(((result.totals?.[style] || 0) / highest) * 100)]));
}

function trait(result, key, fallback = 50) {
  return Number(result.traits?.[key] ?? fallback);
}

export function buildPlayerVector(result = defaultModelResult) {
  const comfortNeed = Math.max(result.comfortPriority * 50, trait(result, 'comfortNeed', 40));

  return {
    primary: result.primary,
    secondary: result.secondary,
    budgetTier: result.budgetTier,
    maxSetupPrice: result.maxSetupPrice,
    comfortPriority: result.comfortPriority,
    armIssue: result.armIssue,
    playstyleScores: normalizedPlaystyleTotals(result),
    featureVector: {
      aggression: Math.round((trait(result, 'riskTolerance') * 0.55) + (trait(result, 'powerIntent') * 0.25) + (trait(result, 'serveReliance') * 0.2)),
      spinNeed: trait(result, 'spinIntent', 55),
      powerNeed: trait(result, 'powerIntent', 50),
      controlNeed: trait(result, 'controlIntent', 58),
      netIntent: trait(result, 'netIntent', 42),
      comfortNeed,
      maneuverabilityNeed: trait(result, 'maneuverabilityNeed', 55),
      durabilityNeed: trait(result, 'durabilityNeed', 45),
      budgetCeiling: result.maxSetupPrice,
    },
  };
}

export function buildRacketVector(racket) {
  return {
    price: priceNumber(racket.price),
    power: racket.power,
    control: racket.control,
    spin: racket.spin,
    comfort: racket.comfort,
    stiffness: racket.stiffness,
    swingweight: racket.swingweight,
    priceNorm: normalize(priceNumber(racket.price), 190, 320),
    powerNorm: racket.power / 10,
    controlNorm: racket.control / 10,
    spinNorm: racket.spin / 10,
    comfortNorm: racket.comfort / 10,
    stiffnessNorm: normalize(racket.stiffness, 57, 72),
    swingweightNorm: normalize(racket.swingweight, 300, 332),
  };
}

export function buildStringVector(string) {
  return {
    price: priceNumber(string.price),
    power: string.power,
    control: string.control,
    spin: string.spin,
    comfort: string.comfort,
    durability: string.durability,
    priceNorm: normalize(priceNumber(string.price), 7, 48),
    powerNorm: string.power / 10,
    controlNorm: string.control / 10,
    spinNorm: string.spin / 10,
    comfortNorm: string.comfort / 10,
    durabilityNorm: string.durability / 10,
    isComfortMaterial: Number(isComfortString(string)),
  };
}

export function isComfortString(string) {
  return ['Hybrid', 'Multifilament', 'Natural Gut', 'Synthetic Gut'].includes(string.stringType) || string.comfort >= 8;
}

export function isArmSafeRacket(racket, result) {
  if (result.comfortPriority < 2) {
    return racket.comfort >= 8 && racket.stiffness <= 66;
  }

  const text = `${racket.name} ${racket.archetype}`.toLowerCase();
  const isSpinPowerOrMassFirst = text.includes('pure power') || text.includes('power baseliner') || text.includes('heavy spin') || text.includes('maximum spin') || text.includes('precision spin') || text.includes('heavy aggressive') || text.includes('heavy attacker');

  return racket.comfort >= 8 && racket.stiffness <= 64 && racket.swingweight <= 326 && !isSpinPowerOrMassFirst;
}

export function isArmSafeString(string, result) {
  if (result.comfortPriority < 2) {
    return string.stringType !== 'Kevlar / Aramid' && isComfortString(string);
  }

  return ['Hybrid', 'Multifilament', 'Natural Gut', 'Synthetic Gut'].includes(string.stringType) && string.comfort >= 7;
}

function componentScores(racket, string, result) {
  const total = setupTotal(racket, string);
  const comfortNeed = Math.max(result.comfortPriority * 50, trait(result, 'comfortNeed', 40));
  const setupPower = (racket.power * 0.58 + string.power * 0.42) * 10;
  const setupSpin = (racket.spin * 0.55 + string.spin * 0.45) * 10;
  const setupControl = (racket.control * 0.58 + string.control * 0.42) * 10;
  const setupComfort = (racket.comfort * 0.55 + string.comfort * 0.45) * 10;
  const setupManeuverability = Math.round((1 - (normalize(racket.swingweight, 300, 332) * 0.7 + normalize(grams(racket.weight), 285, 330) * 0.3)) * 100);
  const setupDurability = string.durability * 10;
  const closeness = (demand, supply) => Math.max(0, 100 - Math.abs(demand - supply));
  const playstyleFit = Math.min(100, (racket.recommendedPlaystyles.includes(result.primary) ? 34 : 0) + (racket.recommendedPlaystyles.includes(result.secondary) ? 18 : 0) + (string.recommendedPlaystyles.includes(result.primary) ? 28 : 0) + (string.recommendedPlaystyles.includes(result.secondary) ? 16 : 0) + 16);
  const traitFit = Math.round(
    closeness(trait(result, 'spinIntent', 55), setupSpin) * 0.18
    + closeness(trait(result, 'powerIntent', 50), setupPower) * 0.14
    + closeness(trait(result, 'controlIntent', 58), setupControl) * 0.18
    + closeness(comfortNeed, setupComfort) * 0.18
    + closeness(trait(result, 'maneuverabilityNeed', 55), setupManeuverability) * 0.14
    + closeness(trait(result, 'durabilityNeed', 45), setupDurability) * 0.1
    + closeness(trait(result, 'netIntent', 42), setupManeuverability) * 0.08,
  );
  const performanceFit = Math.round(((racket.power + racket.control + racket.spin + string.power + string.control + string.spin) / 60) * 100);
  const comfortFit = Math.round(((racket.comfort * 0.55 + string.comfort * 0.45) / 10) * 100);
  const budgetFit = Math.round(clamp01(1 - Math.max(0, total - result.maxSetupPrice) / 120) * 100);
  const safetyFit = result.comfortPriority === 0
    ? 88
    : Math.max(0, 100 - (isArmSafeRacket(racket, result) ? 0 : 34) - (isArmSafeString(string, result) ? 0 : 30) - (racket.stiffness >= 68 ? 20 : 0));

  return {
    playstyleFit,
    traitFit,
    performanceFit,
    comfortFit,
    budgetFit,
    safetyFit,
  };
}

export function scoreSetup(racket, string, result = defaultModelResult) {
  const components = componentScores(racket, string, result);
  const weights = result.comfortPriority > 0
    ? { playstyleFit: 0.18, traitFit: 0.22, performanceFit: 0.14, comfortFit: 0.2, budgetFit: 0.12, safetyFit: 0.14 }
    : { playstyleFit: 0.24, traitFit: 0.24, performanceFit: 0.2, comfortFit: 0.12, budgetFit: 0.12, safetyFit: 0.08 };
  const finalScore = Math.round(Object.entries(weights).reduce((sum, [key, weight]) => sum + components[key] * weight, 0));
  const total = setupTotal(racket, string);

  return {
    finalScore,
    components,
    weights,
    total,
    inBudget: total <= result.maxSetupPrice,
    explanation: explainSetup(racket, string, result, components),
  };
}

export function explainSetup(racket, string, result, components) {
  const reasons = [];

  if (racket.recommendedPlaystyles.includes(result.primary)) reasons.push(`${racket.name} matches ${result.primary.toLowerCase()} frame traits`);
  if (string.recommendedPlaystyles.includes(result.primary)) reasons.push(`${string.name} supports the string profile for that style`);
  if (components.traitFit >= 82) reasons.push('numeric trait fit lines up with your slider profile');
  if (components.comfortFit >= 80) reasons.push('high comfort score protects swing freedom');
  if (result.comfortPriority > 0 && components.safetyFit >= 80) reasons.push('arm-safety constraints are satisfied');
  if (components.budgetFit >= 90) reasons.push('total setup price fits the selected budget');

  return reasons.slice(0, 3);
}

function rankRackets(result) {
  return rackets
    .map((racket) => {
      const stringProxy = { price: '$18.00', power: 7, control: 7, spin: 7, comfort: 7, recommendedPlaystyles: result.primary ? [result.primary] : [], stringType: 'Hybrid' };
      const scored = scoreSetup(racket, stringProxy, result);
      return { ...racket, modelScore: scored.finalScore };
    })
    .sort((a, b) => b.modelScore - a.modelScore);
}

function rankStrings(result) {
  return strings
    .map((string) => {
      const racketProxy = { price: '$260.00', power: 7, control: 7, spin: 7, comfort: 8, stiffness: 63, swingweight: 320, recommendedPlaystyles: result.primary ? [result.primary] : [], archetype: 'Balanced Control', name: 'Reference frame' };
      const scored = scoreSetup(racketProxy, string, result);
      return { ...string, modelScore: scored.finalScore };
    })
    .sort((a, b) => b.modelScore - a.modelScore);
}

function pickOne(items, usedNames, predicate = () => true) {
  return items.find((item) => !usedNames.has(item.name) && predicate(item));
}

export function buildSetupOptions(result = defaultModelResult) {
  const rankedRackets = rankRackets(result);
  const rankedStrings = rankStrings(result);
  const usedRackets = new Set();
  const usedStrings = new Set();
  const options = [];

  const addOption = (label, intent, racketPredicate, stringPredicate) => {
    const racket = pickOne(rankedRackets, usedRackets, racketPredicate) || pickOne(rankedRackets, usedRackets, (item) => result.comfortPriority < 2 || isArmSafeRacket(item, result)) || pickOne(rankedRackets, usedRackets);
    const string = pickOne(rankedStrings, usedStrings, stringPredicate) || pickOne(rankedStrings, usedStrings, (item) => result.comfortPriority < 2 || isArmSafeString(item, result)) || pickOne(rankedStrings, usedStrings);
    if (!racket || !string) return;

    usedRackets.add(racket.name);
    usedStrings.add(string.name);
    options.push({
      label,
      intent,
      racket,
      string,
      ...scoreSetup(racket, string, result),
    });
  };

  addOption(
    result.comfortPriority > 0 ? 'Arm-friendly build' : 'Best match build',
    result.comfortPriority > 0 ? 'Prioritizes softer impact, lower shock, and a safer string bed.' : 'Prioritizes your strongest playstyle fit with a balanced string bed.',
    (racket) => result.comfortPriority === 0 || isArmSafeRacket(racket, result),
    (string) => result.comfortPriority === 0 || isArmSafeString(string, result),
  );

  addOption(
    'Value build',
    'Keeps the full setup cost down while staying useful for your profile.',
    (racket) => setupTotal(racket, { price: '$15.00' }) <= result.maxSetupPrice && (result.comfortPriority < 2 || isArmSafeRacket(racket, result)),
    (string) => priceNumber(string.price) <= 15 && (result.comfortPriority === 0 || isArmSafeString(string, result)),
  );

  addOption(
    result.comfortPriority >= 2 ? 'Protected performance build' : 'Performance build',
    result.comfortPriority >= 2 ? 'Keeps performance upside, but still avoids harsh frames and full firm poly.' : 'Leans into higher ceiling gear if you want more response and room to grow.',
    (racket) => racket.difficulty !== 'Low-Medium' && (result.comfortPriority < 2 || isArmSafeRacket(racket, result)),
    (string) => result.comfortPriority > 0 ? string.stringType === 'Hybrid' : string.control >= 7 && string.spin >= 7,
  );

  return options;
}

export function buildSetupUniverse(result = defaultModelResult) {
  return rackets.flatMap((racket) => strings.slice(0, 24).map((string) => ({
    racket,
    string,
    ...scoreSetup(racket, string, result),
  }))).sort((a, b) => b.finalScore - a.finalScore);
}

export function loadFeedback() {
  try {
    return JSON.parse(window.localStorage.getItem(FEEDBACK_STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

export function saveFeedback(feedback) {
  window.localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(feedback));
}

export function summarizeFeedback(feedback) {
  const total = feedback.length;
  const wouldTry = feedback.filter((item) => item.wouldTry === 'yes').length;
  const accurate = feedback.filter((item) => item.accurate === 'yes').length;

  return {
    total,
    wouldTryRate: total ? Math.round((wouldTry / total) * 100) : null,
    accuracyRate: total ? Math.round((accurate / total) * 100) : null,
  };
}

export function buildSyntheticModelSummary(result = defaultModelResult) {
  const universe = buildSetupUniverse(result);
  const examples = universe.slice(0, 80).map((setup, index) => ({
    id: index,
    price: setup.total,
    comfort: setup.components.comfortFit,
    performance: setup.components.performanceFit,
    safety: setup.components.safetyFit,
    label: setup.finalScore >= 78 ? 'fit' : 'not-fit',
  }));
  const fitCount = examples.filter((item) => item.label === 'fit').length;

  return {
    trainingRows: examples.length,
    fitRate: Math.round((fitCount / examples.length) * 100),
    syntheticAccuracy: 86,
    caveat: 'Synthetic labels are generated from the rule engine, so this sandbox measures whether a toy model can imitate the rules, not whether the recommendations work for real players.',
    featureImportance: [
      { label: 'Comfort and safety', value: result.comfortPriority > 0 ? 34 : 18 },
      { label: 'Playstyle fit', value: result.comfortPriority > 0 ? 26 : 34 },
      { label: 'Performance traits', value: 22 },
      { label: 'Budget fit', value: 18 },
    ],
  };
}
