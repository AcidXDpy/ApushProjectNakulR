export const playstyleNames = [
  'Aggressive Baseliner',
  'Counterpuncher',
  'All-Court Player',
  'Serve-and-Volley Player',
  'Defensive Grinder',
  'Big Server',
  'Heavy Topspin Player',
];

export const playstyles = {
  'Aggressive Baseliner': {
    identity: 'You win by taking court position early, redirecting pace, and turning neutral balls into pressure.',
    strengths: ['First-strike forehand patterns', 'Attacking short balls', 'Dictating from inside the baseline'],
    weaknesses: ['Overhitting before the point is built', 'Low-margin errors under pressure', 'Patience against elite defenders'],
    tacticalPriorities: ['Establish depth before changing direction', 'Attack second serves with shape, not panic pace', 'Use inside-out forehands to open the court'],
    practiceFocus: ['Controlled aggression', 'Short-ball finishing', 'Serve plus one patterns'],
  },
  Counterpuncher: {
    identity: 'You absorb pace, extend rallies, and use opponents’ aggression against them with smart direction changes.',
    strengths: ['Redirecting speed', 'Passing shots', 'Decision-making under pressure'],
    weaknesses: ['Finishing when given control', 'Getting pushed too deep', 'Passive second-serve returns'],
    tacticalPriorities: ['Hold your baseline position', 'Change direction only from balanced contact', 'Counterattack into open space after defense'],
    practiceFocus: ['Transition offense', 'Deep crosscourt tolerance', 'Return depth'],
  },
  'All-Court Player': {
    identity: 'You blend baseline patterns, transition shots, and net pressure to keep opponents uncomfortable.',
    strengths: ['Varied point construction', 'Net transitions', 'Adapting to matchups'],
    weaknesses: ['Lacking a default pattern under stress', 'Choosing variety over clarity', 'Mid-court indecision'],
    tacticalPriorities: ['Define a primary pattern each set', 'Approach behind deep balls', 'Use slice and height changes to disrupt rhythm'],
    practiceFocus: ['Approach accuracy', 'Pattern selection', 'First volley placement'],
  },
  'Serve-and-Volley Player': {
    identity: 'You compress points with serve placement, forward movement, and decisive volley positioning.',
    strengths: ['Short points', 'Net pressure', 'Taking time away'],
    weaknesses: ['Passing-shot exposure', 'Second-serve vulnerability', 'Baseline patience'],
    tacticalPriorities: ['Serve to body often', 'Volley to space instead of lines', 'Mix serve-and-volley with delayed approaches'],
    practiceFocus: ['Serve locations', 'Split-step timing', 'Low volley control'],
  },
  'Defensive Grinder': {
    identity: 'You make matches physical, defend with discipline, and force opponents to prove they can finish points repeatedly.',
    strengths: ['Consistency', 'Court coverage', 'Mental pressure through ball tolerance'],
    weaknesses: ['Leaving balls short', 'Struggling to end points', 'Getting exposed by net rushes'],
    tacticalPriorities: ['Keep heavy depth through the middle', 'Use height to reset', 'Bring impatient opponents forward on your terms'],
    practiceFocus: ['Depth under fatigue', 'Passing-shot targets', 'Moonball to neutral resets'],
  },
  'Big Server': {
    identity: 'Your serve creates scoreboard pressure, free points, and short-ball opportunities before rallies fully form.',
    strengths: ['Free points', 'Serve plus one', 'Tiebreak pressure'],
    weaknesses: ['Return games drifting', 'Baseline rhythm after serve drops', 'Over-relying on first serve'],
    tacticalPriorities: ['Protect second serve with body targets', 'Plan plus-one direction before serving', 'Make return games about depth and patience'],
    practiceFocus: ['Second-serve reliability', 'First-ball forehand', 'Return neutralization'],
  },
  'Heavy Topspin Player': {
    identity: 'You use shape, height, and rotation to push opponents back and create attackable balls above their strike zone.',
    strengths: ['High-margin offense', 'Forehand spin', 'Creating short balls with height'],
    weaknesses: ['Flattening out at the right time', 'Low skidding balls', 'Taking balls early'],
    tacticalPriorities: ['Work high to backhands', 'Use angles to open space', 'Finish with flatter drives only after earning the ball'],
    practiceFocus: ['Spin depth', 'High forehand patterns', 'Low-ball handling'],
  },
};

export const quizQuestions = [
  {
    id: 'rallyLength',
    question: 'What rally length feels most natural?',
    options: [
      { label: 'Short points, first strike', scores: { 'Big Server': 2, 'Serve-and-Volley Player': 2, 'Aggressive Baseliner': 1 } },
      { label: 'Medium rallies with chances to attack', scores: { 'Aggressive Baseliner': 2, 'All-Court Player': 2, 'Heavy Topspin Player': 1 } },
      { label: 'Long rallies where patience wins', scores: { 'Defensive Grinder': 2, Counterpuncher: 2, 'Heavy Topspin Player': 1 } },
    ],
  },
  {
    id: 'wingStrength',
    question: 'Which wing shapes your game?',
    options: [
      { label: 'Forehand is the weapon', scores: { 'Aggressive Baseliner': 2, 'Heavy Topspin Player': 2, 'Big Server': 1 } },
      { label: 'Backhand redirect is reliable', scores: { Counterpuncher: 2, 'All-Court Player': 1, 'Defensive Grinder': 1 } },
      { label: 'Both sides are balanced', scores: { 'All-Court Player': 2, Counterpuncher: 1, 'Defensive Grinder': 1 } },
    ],
  },
  {
    id: 'serveStrength',
    question: 'How much does your serve help you?',
    options: [
      { label: 'It wins free points', scores: { 'Big Server': 3, 'Serve-and-Volley Player': 1 } },
      { label: 'It starts patterns well', scores: { 'Aggressive Baseliner': 2, 'All-Court Player': 1 } },
      { label: 'It mostly starts rallies', scores: { 'Defensive Grinder': 2, Counterpuncher: 1 } },
    ],
  },
  {
    id: 'netComfort',
    question: 'How comfortable are you at net?',
    options: [
      { label: 'I want to finish there', scores: { 'Serve-and-Volley Player': 3, 'All-Court Player': 2 } },
      { label: 'I come in after earning it', scores: { 'All-Court Player': 2, 'Aggressive Baseliner': 1 } },
      { label: 'I prefer passing from the baseline', scores: { Counterpuncher: 2, 'Defensive Grinder': 2 } },
    ],
  },
  {
    id: 'spinProfile',
    question: 'What ball shape do you trust most?',
    options: [
      { label: 'Heavy topspin and height', scores: { 'Heavy Topspin Player': 3, 'Defensive Grinder': 1 } },
      { label: 'Flat pace through the court', scores: { 'Aggressive Baseliner': 2, 'Big Server': 1 } },
      { label: 'Varied spin, slice, and pace', scores: { 'All-Court Player': 2, Counterpuncher: 1 } },
    ],
  },
  {
    id: 'riskTolerance',
    question: 'Power or consistency?',
    options: [
      { label: 'Power creates the answer', scores: { 'Aggressive Baseliner': 2, 'Big Server': 2 } },
      { label: 'Consistency breaks opponents', scores: { 'Defensive Grinder': 3, Counterpuncher: 2 } },
      { label: 'Controlled power with margin', scores: { 'Heavy Topspin Player': 2, 'All-Court Player': 1 } },
    ],
  },
  {
    id: 'defense',
    question: 'When pulled wide, what happens?',
    options: [
      { label: 'I reset and extend', scores: { 'Defensive Grinder': 3, Counterpuncher: 2 } },
      { label: 'I counter into open space', scores: { Counterpuncher: 3, 'All-Court Player': 1 } },
      { label: 'I look for a running winner', scores: { 'Aggressive Baseliner': 2, 'Heavy Topspin Player': 1 } },
    ],
  },
  {
    id: 'secondServe',
    question: 'How do you treat opponent second serves?',
    options: [
      { label: 'Step in and attack', scores: { 'Aggressive Baseliner': 2, 'Big Server': 1, 'All-Court Player': 1 } },
      { label: 'Make a deep return first', scores: { Counterpuncher: 2, 'Defensive Grinder': 2 } },
      { label: 'Chip, charge, or change looks', scores: { 'Serve-and-Volley Player': 2, 'All-Court Player': 2 } },
    ],
  },
  {
    id: 'courtPosition',
    question: 'Where do you prefer to play?',
    options: [
      { label: 'Inside or on the baseline', scores: { 'Aggressive Baseliner': 2, 'Big Server': 1 } },
      { label: 'A step back with time to shape points', scores: { 'Heavy Topspin Player': 2, 'Defensive Grinder': 2 } },
      { label: 'Moving forward whenever possible', scores: { 'Serve-and-Volley Player': 2, 'All-Court Player': 2 } },
    ],
  },
  {
    id: 'weakness',
    question: 'What costs you the most matches?',
    options: [
      { label: 'Too many errors while attacking', scores: { 'Aggressive Baseliner': 2, 'Heavy Topspin Player': 1 } },
      { label: 'Trouble finishing points', scores: { 'Defensive Grinder': 2, Counterpuncher: 2 } },
      { label: 'Return games and baseline exchanges', scores: { 'Big Server': 2, 'Serve-and-Volley Player': 1 } },
    ],
  },
];

export function scoreQuiz(answers) {
  const totals = Object.fromEntries(playstyleNames.map((style) => [style, 0]));

  quizQuestions.forEach((question) => {
    const selectedIndex = answers[question.id];
    const selected = question.options[selectedIndex];
    if (!selected) return;

    Object.entries(selected.scores).forEach(([style, points]) => {
      totals[style] += points;
    });
  });

  const ranked = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  return {
    totals,
    primary: ranked[0][0],
    secondary: ranked[1][0],
  };
}
