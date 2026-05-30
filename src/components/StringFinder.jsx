import { useState } from 'react';
import { Cable } from 'lucide-react';
import { strings } from '../data/strings.js';
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
        <div className="rating-fill h-full rounded-full bg-gradient-to-r from-court-lime to-court-blue" style={{ '--rating-width': `${value * 10}%` }} />
      </div>
    </div>
  );
}

export default function StringFinder({ selectedStyle, setSelectedStyle }) {
  const [showAll, setShowAll] = useState(false);
  const filtered = showAll ? strings : strings.filter((string) => string.recommendedPlaystyles.includes(selectedStyle));

  return (
    <section id="strings" className="section-pad border-y border-white/10 bg-black/15">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-court-blue">String Finder</p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Tune feel, launch, and comfort</h2>
            <p className="mt-3 text-sm text-slate-400">{filtered.length} strings shown</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="action-button focus-within:ring-court-blue flex items-center gap-3 rounded-lg border border-white/15 bg-court-panel px-4 py-3 text-sm font-bold text-white focus-within:ring-2">
              <input type="checkbox" checked={showAll} onChange={(event) => setShowAll(event.target.checked)} className="h-4 w-4 accent-court-blue" />
              Show all strings
            </label>
            <select value={selectedStyle} onChange={(event) => setSelectedStyle(event.target.value)} className="focus-ring rounded-lg border border-white/15 bg-court-panel px-4 py-3 text-white" disabled={showAll}>
              {playstyleNames.map((name) => <option key={name}>{name}</option>)}
            </select>
          </div>
        </div>
        <div className="catalog-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((string, index) => (
            <Card key={string.name} className="reveal-card" style={{ '--reveal-delay': `${Math.min(index, 12) * 45}ms` }}>
              <Cable className="text-court-blue" />
              <h3 className="mt-4 text-xl font-black text-white">{string.name}</h3>
              <p className="mt-2 text-sm font-bold text-court-blue">{string.stringType} / {string.tensionRange}</p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-300">
                <p className="rounded-lg bg-white/[0.04] px-3 py-2"><span className="text-slate-500">Price</span><br />{string.price}</p>
                <p className="rounded-lg bg-white/[0.04] px-3 py-2"><span className="text-slate-500">Gauge</span><br />{string.gauge}</p>
                <p className="rounded-lg bg-white/[0.04] px-3 py-2"><span className="text-slate-500">Line</span><br />{string.line}</p>
                <p className="rounded-lg bg-white/[0.04] px-3 py-2"><span className="text-slate-500">Stiffness</span><br />{string.stiffness}</p>
              </div>
              <div className="mt-5 space-y-3">
                <Rating label="Power" value={string.power} />
                <Rating label="Control" value={string.control} />
                <Rating label="Spin" value={string.spin} />
                <Rating label="Comfort" value={string.comfort} />
                <Rating label="Durability" value={string.durability} />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-court-lime">{string.archetype}</p>
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
