import { Compass } from 'lucide-react';
import { playstyleNames, playstyles } from '../data/playstyles.js';
import Card from './Card.jsx';

export default function StrategyAdvisor({ selectedStyle, setSelectedStyle }) {
  const style = playstyles[selectedStyle];

  return (
    <section id="strategy" className="section-pad border-y border-white/10 bg-black/15">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-court-blue">Strategy Advisor</p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Turn style into point patterns</h2>
          </div>
          <select value={selectedStyle} onChange={(event) => setSelectedStyle(event.target.value)} className="focus-ring rounded-lg border border-white/15 bg-court-panel px-4 py-3 text-white">
            {playstyleNames.map((name) => <option key={name}>{name}</option>)}
          </select>
        </div>
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <Compass className="text-court-blue" size={30} />
            <h3 className="mt-4 text-2xl font-black">{selectedStyle}</h3>
            <p className="mt-3 leading-7 text-slate-300">{style.identity}</p>
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ['Tactical priorities', style.tacticalPriorities],
              ['Practice focus', style.practiceFocus],
            ].map(([title, items]) => (
              <Card key={title}>
                <h3 className="font-black text-white">{title}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  {items.map((item) => <li key={item}>- {item}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
