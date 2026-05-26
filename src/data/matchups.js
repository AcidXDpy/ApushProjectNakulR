const defaultAdvice = {
  howToWin: 'Own your clearest pattern, protect the middle of the court, and make the opponent hit from uncomfortable contact points.',
  avoid: 'Avoid changing tactics after one lost point or trying to win with shots that are not part of your identity.',
  serve: 'Use body serves early, then open the court once the returner starts cheating.',
  return: 'Prioritize depth through the middle before taking bigger return targets.',
  rally: 'Build around your best crosscourt pattern and change direction only from balance.',
  pressure: 'On big points, choose the pattern you can repeat under stress.',
};

export const matchupAdvice = {
  'Aggressive Baseliner|Defensive Grinder': {
    howToWin: 'Build points with depth, attack short balls, and use controlled aggression instead of trying to hit through defense too early.',
    avoid: 'Do not overhit early or donate errors from neutral positions.',
    serve: 'Serve body and wide to create predictable short replies for the first forehand.',
    return: 'Step in on second serves but target deep crosscourt or deep middle first.',
    rally: 'Use depth to push them back, then bring them forward when possible.',
    pressure: 'Pick big targets and make them defend one more quality ball before finishing.',
  },
  'Defensive Grinder|Aggressive Baseliner': {
    howToWin: 'Make them play extra shots, keep your depth high, and force attacks from below net height.',
    avoid: 'Avoid sitting too far back and feeding short balls into their strike zone.',
    serve: 'Serve high-percentage body serves to reduce immediate angles.',
    return: 'Return deep middle to remove first-strike direction.',
    rally: 'Use height and depth through the center, then pass or lob when they rush.',
    pressure: 'Make them prove patience; do not bail them out with risky counters.',
  },
  'Big Server|Counterpuncher': {
    howToWin: 'Use serve location variety and finish with the first open-court ball before rallies become physical.',
    avoid: 'Avoid predictable flat first serves that let them block returns rhythmically.',
    serve: 'Mix body serves and kick serves to jam the return position.',
    return: 'On return games, accept neutral starts and make them hold from rallies.',
    rally: 'Look for serve plus one but reset if the counterpuncher neutralizes your first attack.',
    pressure: 'Trust body serves and big targets instead of chasing aces.',
  },
  'Serve-and-Volley Player|Heavy Topspin Player': {
    howToWin: 'Take time away before heavy spin climbs, and volley behind them when they defend from deep.',
    avoid: 'Avoid approaching to the same side repeatedly or letting them set up heavy passes.',
    serve: 'Serve into the body to limit full-spin returns.',
    return: 'Chip low and come forward selectively behind depth.',
    rally: 'Use slice and forward movement to keep contact low.',
    pressure: 'Make first volleys simple and deep, then finish the second ball.',
  },
  'All-Court Player|Big Server': {
    howToWin: 'Extend return games, vary height and pace, and force the server to play uncomfortable second shots.',
    avoid: 'Avoid low-percentage return winners on first serves.',
    serve: 'Use placement over speed and look to move forward behind depth.',
    return: 'Block first serves deep middle; attack second serves with angle or chip pressure.',
    rally: 'Use variety to prevent the server from timing one forehand pattern.',
    pressure: 'On break points, make returns first and turn the point into movement.',
  },
};

export function getMatchupAdvice(playerStyle, opponentStyle) {
  return matchupAdvice[`${playerStyle}|${opponentStyle}`] || {
    ...defaultAdvice,
    howToWin: `${defaultAdvice.howToWin} As a ${playerStyle}, lean into the patterns that deny a ${opponentStyle} their favorite rhythm.`,
  };
}
