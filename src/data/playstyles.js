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
  },
  Counterpuncher: {
    identity: 'You absorb pace, extend rallies, and need gear that stays predictable when the ball is coming in fast.',
    strengths: ['Redirecting speed', 'Passing shots', 'Decision-making under pressure'],
    weaknesses: ['Finishing when given control', 'Getting pushed too deep', 'Passive second-serve returns'],
  },
  'All-Court Player': {
    identity: 'You blend baseline patterns, transition shots, and net pressure, so your gear needs a balanced response everywhere.',
    strengths: ['Varied point construction', 'Net transitions', 'Adapting your gear to multiple shot types'],
    weaknesses: ['Lacking a default pattern under stress', 'Choosing variety over clarity', 'Mid-court indecision'],
  },
  'Serve-and-Volley Player': {
    identity: 'You compress points with serve placement, forward movement, and decisive volley positioning.',
    strengths: ['Short points', 'Net pressure', 'Taking time away'],
    weaknesses: ['Passing-shot exposure', 'Second-serve vulnerability', 'Baseline patience'],
  },
  'Defensive Grinder': {
    identity: 'You make matches physical, defend with discipline, and need comfort and control that hold up deep into long rallies.',
    strengths: ['Consistency', 'Court coverage', 'Mental pressure through ball tolerance'],
    weaknesses: ['Leaving balls short', 'Struggling to end points', 'Getting exposed by net rushes'],
  },
  'Big Server': {
    identity: 'Your serve creates scoreboard pressure, free points, and short-ball opportunities before rallies fully form.',
    strengths: ['Free points', 'Serve plus one', 'Tiebreak pressure'],
    weaknesses: ['Return games drifting', 'Baseline rhythm after serve drops', 'Over-relying on first serve'],
  },
  'Heavy Topspin Player': {
    identity: 'You use shape, height, and rotation, so your setup should help the ball jump without losing depth control.',
    strengths: ['High-margin offense', 'Forehand spin', 'Creating short balls with height'],
    weaknesses: ['Flattening out at the right time', 'Low skidding balls', 'Taking balls early'],
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
    question: 'What should your gear help most?',
    options: [
      { label: 'Power creates the answer', scores: { 'Aggressive Baseliner': 2, 'Big Server': 2 } },
      { label: 'Consistency and control', scores: { 'Defensive Grinder': 3, Counterpuncher: 2 } },
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
    question: 'What kind of return feel do you like?',
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
  {
    id: 'budget',
    question: 'What budget feels realistic for a full racket + string setup?',
    options: [
      { label: 'Keep it value-focused under $250', profile: { budgetTier: 'Value', maxSetupPrice: 250 } },
      { label: 'Balanced setup around $250-$330', profile: { budgetTier: 'Balanced', maxSetupPrice: 330 } },
      { label: 'Premium fit matters more than price', profile: { budgetTier: 'Premium', maxSetupPrice: 420 } },
    ],
  },
  {
    id: 'armHealth',
    question: 'Any current arm issues we should protect?',
    options: [
      { label: 'No current elbow, shoulder, or wrist problems', profile: { armIssue: 'None', comfortPriority: 0 } },
      { label: 'Some soreness after playing', profile: { armIssue: 'Mild soreness', comfortPriority: 1 } },
      { label: 'Elbow, shoulder, or wrist pain affects how I play', profile: { armIssue: 'Active pain', comfortPriority: 2 } },
    ],
  },
];

export function scoreQuiz(answers) {
  const totals = Object.fromEntries(playstyleNames.map((style) => [style, 0]));
  const profile = {
    budgetTier: 'Balanced',
    maxSetupPrice: 330,
    armIssue: 'None',
    comfortPriority: 0,
  };

  quizQuestions.forEach((question) => {
    const selectedIndex = answers[question.id];
    const selected = question.options[selectedIndex];
    if (!selected) return;

    Object.entries(selected.scores || {}).forEach(([style, points]) => {
      totals[style] += points;
    });

    Object.assign(profile, selected.profile || {});
  });

  const ranked = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  return {
    totals,
    primary: ranked[0][0],
    secondary: ranked[1][0],
    ...profile,
  };
}
