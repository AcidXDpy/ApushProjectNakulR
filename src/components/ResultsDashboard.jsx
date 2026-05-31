import { CheckCircle2, ShieldCheck, Target, Wallet, Zap } from 'lucide-react';
import { playstyles } from '../data/playstyles.js';
import { rackets } from '../data/rackets.js';
import { strings } from '../data/strings.js';
import Card from './Card.jsx';

const STRINGING_LABOR_ESTIMATE = 25;

function priceNumber(price) {
  return Number(String(price).replace(/[^0-9.]/g, '')) || 0;
}

function money(value) {
  return `$${Math.round(value)}`;
}

function setupTotal(racket, string) {
  return priceNumber(racket.price) + priceNumber(string.price) + STRINGING_LABOR_ESTIMATE;
}

function isComfortString(string) {
  return ['Hybrid', 'Multifilament', 'Natural Gut', 'Synthetic Gut'].includes(string.stringType) || string.comfort >= 8;
}

function isArmSafeRacket(racket, result) {
  if (result.comfortPriority < 2) {
    return racket.comfort >= 8 && racket.stiffness <= 66;
  }

  const text = `${racket.name} ${racket.archetype}`.toLowerCase();
  const isSpinPowerOrMassFirst = text.includes('pure power') || text.includes('power baseliner') || text.includes('heavy spin') || text.includes('maximum spin') || text.includes('precision spin') || text.includes('heavy aggressive') || text.includes('heavy attacker');

  return racket.comfort >= 8 && racket.stiffness <= 64 && racket.swingweight <= 326 && !isSpinPowerOrMassFirst;
}

function isArmSafeString(string, result) {
  if (result.comfortPriority < 2) {
    return string.stringType !== 'Kevlar / Aramid' && isComfortString(string);
  }

  return ['Hybrid', 'Multifilament', 'Natural Gut', 'Synthetic Gut'].includes(string.stringType) && string.comfort >= 7;
}

function scoreRacketForResult(racket, result) {
  let score = 0;

  if (racket.recommendedPlaystyles.includes(result.primary)) score += 18;
  if (racket.recommendedPlaystyles.includes(result.secondary)) score += 10;

  score += racket.control + racket.spin + racket.power + racket.comfort;

  if (result.comfortPriority > 0) {
    score += racket.comfort * (result.comfortPriority + 4);
    if (isArmSafeRacket(racket, result)) score += 28 * result.comfortPriority;
    if (racket.stiffness >= 65) score -= 14 * result.comfortPriority;
    if (racket.stiffness >= 68) score -= 18 * result.comfortPriority;
    if (racket.swingweight >= 326) score -= 8 * result.comfortPriority;
  }

  return score;
}

function scoreStringForResult(string, result) {
  let score = 0;

  if (string.recommendedPlaystyles.includes(result.primary)) score += 16;
  if (string.recommendedPlaystyles.includes(result.secondary)) score += 8;

  score += string.control + string.spin + string.power + string.comfort;

  if (result.comfortPriority > 0) {
    score += string.comfort * (result.comfortPriority + 2);
    if (string.stringType === 'Polyester') score -= 10 * result.comfortPriority;
    if (string.stringType === 'Polyester' && ['High', 'Very High', 'Med-High'].includes(string.stiffness)) score -= 14 * result.comfortPriority;
    if (string.stringType === 'Kevlar / Aramid') score -= 30 * result.comfortPriority;
    if (isArmSafeString(string, result)) score += 18 * result.comfortPriority;
  }

  return score;
}

function pickOne(items, usedNames, predicate = () => true) {
  return items.find((item) => !usedNames.has(item.name) && predicate(item));
}

function buildSetupOptions(result) {
  const rankedRackets = rackets
    .map((racket) => ({ ...racket, matchScore: scoreRacketForResult(racket, result) }))
    .sort((a, b) => b.matchScore - a.matchScore);

  const rankedStrings = strings
    .map((string) => ({ ...string, matchScore: scoreStringForResult(string, result) }))
    .sort((a, b) => b.matchScore - a.matchScore);

  const usedRackets = new Set();
  const usedStrings = new Set();
  const options = [];

  const addOption = (label, intent, racketPredicate, stringPredicate) => {
    const racket = pickOne(rankedRackets, usedRackets, racketPredicate) || pickOne(rankedRackets, usedRackets, (item) => result.comfortPriority < 2 || isArmSafeRacket(item, result)) || pickOne(rankedRackets, usedRackets);
    const string = pickOne(rankedStrings, usedStrings, stringPredicate) || pickOne(rankedStrings, usedStrings, (item) => result.comfortPriority < 2 || isArmSafeString(item, result)) || pickOne(rankedStrings, usedStrings);
    if (!racket || !string) return;

    usedRackets.add(racket.name);
    usedStrings.add(string.name);

    const total = setupTotal(racket, string);
    options.push({
      label,
      intent,
      racket,
      string,
      total,
      inBudget: total <= result.maxSetupPrice,
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

function ListBlock({ title, items }) {
  return (
    <Card>
      <h3 className="text-lg font-black text-court-ink">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
            <CheckCircle2 className="mt-1 shrink-0 text-court-blue" size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function GearImpactBlock({ result }) {
  const impacts = [
    `Your ${result.primary.toLowerCase()} profile should prioritize frames that support your natural shot shape without forcing extra effort.`,
    `The secondary ${result.secondary.toLowerCase()} lean is useful for deciding whether to bias toward more control, comfort, spin, or free power.`,
    result.comfortPriority > 0
      ? 'Because you flagged arm sensitivity, avoid very stiff strings and consider hybrid, multifilament, natural gut, or lower-tension setups first.'
      : 'Use racket specs and string tension together: a powerful frame can be calmed down with control strings, while a control frame can be opened up with livelier strings.',
  ];

  return <ListBlock title="Gear Impact" items={impacts} />;
}

export default function ResultsDashboard({ result }) {
  if (!result) {
    return (
      <section id="results" className="section-pad">
        <div className="mx-auto max-w-7xl">
          <Card className="text-center">
            <Target className="mx-auto text-court-blue" size={34} />
            <h2 className="mt-4 text-2xl font-black">Your gear profile will appear here</h2>
            <p className="mt-2 text-slate-600">Complete the quiz to unlock racket, string, tension, and setup recommendations.</p>
          </Card>
        </div>
      </section>
    );
  }

  const primary = playstyles[result.primary];
  const secondary = playstyles[result.secondary];
  const setupOptions = buildSetupOptions(result);

  return (
    <section id="results" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="bg-gradient-to-br from-white via-court-blue/5 to-court-lime/20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-court-blue">Gear Profile</p>
            <h2 className="mt-3 text-4xl font-black text-court-ink">{result.primary}</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">{primary.identity}</p>
          </Card>
          <Card>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <p className="text-sm text-slate-500">Secondary style</p>
                <h3 className="mt-2 text-2xl font-black text-court-ink">{result.secondary}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{secondary.identity}</p>
              </div>
              <div className="grid gap-3">
                <div className="rounded-lg bg-slate-50 p-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-court-blue">
                    <Wallet size={16} />
                    Budget
                  </div>
                  <p className="mt-1 text-sm text-slate-700">{result.budgetTier} / max {money(result.maxSetupPrice)}</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-court-lime">
                    <ShieldCheck size={16} />
                    Arm status
                  </div>
                  <p className="mt-1 text-sm text-slate-700">{result.armIssue}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <ListBlock title="Strengths" items={primary.strengths} />
          <GearImpactBlock result={result} />
          <ListBlock title="Setup Watchouts" items={primary.weaknesses} />
        </div>

        <div className="mt-4 grid gap-4">
          <Card>
            <div className="flex items-center gap-3">
              <Zap className="text-court-lime" />
              <h3 className="text-lg font-black">Recommended Setup Options</h3>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Estimated totals include one racket, one string set, and about {money(STRINGING_LABOR_ESTIMATE)} for stringing labor.
            </p>
            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              {setupOptions.map((option) => (
                <div key={option.label} className="rounded-lg border border-court-line bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-court-blue">{option.label}</p>
                      <h4 className="mt-2 text-2xl font-black text-court-ink">{money(option.total)}</h4>
                    </div>
                    <span className={`rounded-lg px-2 py-1 text-xs font-bold ${option.inBudget ? 'bg-court-lime/20 text-court-ink' : 'bg-white text-slate-500'}`}>
                      {option.inBudget ? 'In budget' : 'Stretch'}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{option.intent}</p>

                  <div className="mt-4 overflow-hidden rounded-lg bg-white">
                    <img src={option.racket.image} alt={option.racket.imageAlt} className="h-32 w-full object-contain p-3" />
                  </div>

                  <div className="mt-4 space-y-3 text-sm">
                    <div>
                      <p className="font-bold text-court-blue">Racket</p>
                      <p className="text-slate-700">{option.racket.name}</p>
                      <p className="text-xs text-slate-500">{option.racket.price} / {option.racket.archetype}</p>
                    </div>
                    <div>
                      <p className="font-bold text-court-lime">String</p>
                      <p className="text-slate-700">{option.string.name}</p>
                      <p className="text-xs text-slate-500">{option.string.price} / {option.string.stringType} / {option.string.tensionRange}</p>
                    </div>
                    <div className="rounded-lg border border-court-line bg-white p-3 text-xs leading-5 text-slate-600">
                      Racket {option.racket.price} + string {option.string.price} + labor {money(STRINGING_LABOR_ESTIMATE)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
