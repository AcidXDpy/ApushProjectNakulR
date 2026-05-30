import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { rackets } from '../data/rackets.js';
import { playstyleNames } from '../data/playstyles.js';
import Card from './Card.jsx';

function Rating({ label, value }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs text-slate-400">
        <span>{label}</span>
        <span>{value}/10</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-court-blue to-court-green" style={{ width: `${value * 10}%` }} />
      </div>
    </div>
  );
}

export default function RacketFinder({ selectedStyle, setSelectedStyle }) {
  const [showAll, setShowAll] = useState(false);
  const filtered = showAll ? rackets : rackets.filter((racket) => racket.recommendedPlaystyles.includes(selectedStyle));

  return (
    <section id="gear" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-court-blue">Racket Finder</p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Frames matched to your game</h2>
            <p className="mt-3 text-sm text-slate-400">{filtered.length} rackets shown</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="focus-within:ring-court-blue flex items-center gap-3 rounded-lg border border-white/15 bg-court-panel px-4 py-3 text-sm font-bold text-white focus-within:ring-2">
              <input type="checkbox" checked={showAll} onChange={(event) => setShowAll(event.target.checked)} className="h-4 w-4 accent-court-blue" />
              Show all rackets
            </label>
            <select value={selectedStyle} onChange={(event) => setSelectedStyle(event.target.value)} className="focus-ring rounded-lg border border-white/15 bg-court-panel px-4 py-3 text-white" disabled={showAll}>
              {playstyleNames.map((name) => <option key={name}>{name}</option>)}
            </select>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {filtered.map((racket) => (
            <Card key={racket.name}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-black text-white">{racket.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{racket.bestFor}</p>
                </div>
                <SlidersHorizontal className="shrink-0 text-court-blue" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-300">
                <p className="rounded-lg bg-white/[0.04] px-3 py-2"><span className="text-slate-500">Price</span><br />{racket.price}</p>
                <p className="rounded-lg bg-white/[0.04] px-3 py-2"><span className="text-slate-500">Head</span><br />{racket.headSize}</p>
                <p className="rounded-lg bg-white/[0.04] px-3 py-2"><span className="text-slate-500">Weight</span><br />{racket.weight}</p>
                <p className="rounded-lg bg-white/[0.04] px-3 py-2"><span className="text-slate-500">Pattern</span><br />{racket.stringPattern}</p>
                <p className="rounded-lg bg-white/[0.04] px-3 py-2"><span className="text-slate-500">RA</span><br />{racket.stiffness}</p>
                <p className="rounded-lg bg-white/[0.04] px-3 py-2"><span className="text-slate-500">Swingweight</span><br />{racket.swingweight}</p>
              </div>
              <div className="mt-5 space-y-3">
                <Rating label="Power" value={racket.power} />
                <Rating label="Control" value={racket.control} />
                <Rating label="Spin" value={racket.spin} />
                <Rating label="Comfort" value={racket.comfort} />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-court-blue">{racket.archetype}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-court-lime">Difficulty: {racket.difficulty}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{racket.reason}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
