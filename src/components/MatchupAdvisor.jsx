import { ShieldAlert, Swords } from 'lucide-react';
import { getMatchupAdvice } from '../data/matchups.js';
import { playstyleNames } from '../data/playstyles.js';
import Card from './Card.jsx';

export default function MatchupAdvisor({ playerStyle, opponentStyle, setPlayerStyle, setOpponentStyle }) {
  const advice = getMatchupAdvice(playerStyle, opponentStyle);
  const items = [
    ['How to win', advice.howToWin],
    ['What to avoid', advice.avoid],
    ['Serve strategy', advice.serve],
    ['Return strategy', advice.return],
    ['Rally strategy', advice.rally],
    ['Pressure points', advice.pressure],
  ];

  return (
    <section id="matchup" className="section-pad border-t border-white/10 bg-black/15">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-court-blue">Matchup Advisor</p>
          <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Plan the match before warmup ends</h2>
        </div>
        <Card className="mb-4">
          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-end">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-300">Your style</span>
              <select value={playerStyle} onChange={(event) => setPlayerStyle(event.target.value)} className="focus-ring w-full rounded-lg border border-white/15 bg-court-panel px-4 py-3 text-white">
                {playstyleNames.map((name) => <option key={name}>{name}</option>)}
              </select>
            </label>
            <div className="hidden place-items-center rounded-lg border border-white/10 bg-white/[0.04] p-3 md:grid">
              <Swords className="text-court-green" />
            </div>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-300">Opponent style</span>
              <select value={opponentStyle} onChange={(event) => setOpponentStyle(event.target.value)} className="focus-ring w-full rounded-lg border border-white/15 bg-court-panel px-4 py-3 text-white">
                {playstyleNames.map((name) => <option key={name}>{name}</option>)}
              </select>
            </label>
          </div>
        </Card>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, body]) => (
            <Card key={title}>
              <ShieldAlert className="text-court-lime" />
              <h3 className="mt-4 text-lg font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
