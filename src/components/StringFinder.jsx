import { Cable } from 'lucide-react';
import { strings } from '../data/strings.js';
import { playstyleNames } from '../data/playstyles.js';
import Card from './Card.jsx';

export default function StringFinder({ selectedStyle, setSelectedStyle }) {
  const filtered = strings.filter((string) => string.recommendedPlaystyles.includes(selectedStyle));

  return (
    <section className="section-pad border-y border-white/10 bg-black/15">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-court-blue">String Finder</p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Feel, spin, and tension guidance</h2>
          </div>
          <select value={selectedStyle} onChange={(event) => setSelectedStyle(event.target.value)} className="focus-ring rounded-lg border border-white/15 bg-court-panel px-4 py-3 text-white">
            {playstyleNames.map((name) => <option key={name}>{name}</option>)}
          </select>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((string) => (
            <Card key={string.type}>
              <Cable className="text-court-blue" />
              <h3 className="mt-4 text-xl font-black text-white">{string.type}</h3>
              <p className="mt-2 text-sm font-bold text-court-blue">{string.tensionRange}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{string.bestFor}</p>
              <p className="mt-4 rounded-lg border border-amber-300/20 bg-amber-300/10 p-3 text-sm leading-6 text-amber-100">{string.warnings}</p>
              <p className="mt-4 text-sm leading-6 text-slate-400">{string.reason}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
