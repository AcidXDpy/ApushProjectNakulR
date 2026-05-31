import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { rackets } from '../data/rackets.js';
import { playstyleNames } from '../data/playstyles.js';
import Card from './Card.jsx';

function Rating({ label, value }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs text-slate-500">
        <span>{label}</span>
        <span>{value}/10</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <div className="rating-fill h-full rounded-full bg-gradient-to-r from-court-blue to-court-green" style={{ '--rating-width': `${value * 10}%` }} />
      </div>
    </div>
  );
}

export default function RacketFinder({ selectedStyle, setSelectedStyle }) {
  const [showAll, setShowAll] = useState(false);
  const filtered = showAll ? rackets : rackets.filter((racket) => racket.recommendedPlaystyles.includes(selectedStyle));

  return (
    <section id="gear" className="section-pad reveal-section">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="reveal-up">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-court-blue">Racket Finder</p>
            <h2 className="mt-2 text-3xl font-black text-court-ink sm:text-4xl">Frames matched to your game</h2>
            <p className="mt-3 text-sm text-slate-500">{filtered.length} rackets shown</p>
          </div>
          <div className="reveal-up flex flex-col gap-3 sm:flex-row [animation-delay:100ms]">
            <label className="action-button focus-within:ring-court-blue flex items-center gap-3 rounded-lg border border-court-line bg-white px-4 py-3 text-sm font-bold text-court-ink shadow-card focus-within:ring-2">
              <input type="checkbox" checked={showAll} onChange={(event) => setShowAll(event.target.checked)} className="h-4 w-4 accent-court-blue" />
              Show all rackets
            </label>
            <select value={selectedStyle} onChange={(event) => setSelectedStyle(event.target.value)} className="focus-ring rounded-lg border border-court-line bg-white px-4 py-3 text-court-ink shadow-card" disabled={showAll}>
              {playstyleNames.map((name) => <option key={name}>{name}</option>)}
            </select>
          </div>
        </div>
        <div className="catalog-grid grid gap-4 lg:grid-cols-3">
          {filtered.map((racket, index) => (
            <Card key={racket.name} className="group reveal-card" style={{ '--reveal-delay': `${Math.min(index, 12) * 45}ms` }}>
              <div className="mb-5 flex aspect-[5/3] items-center justify-center overflow-hidden rounded-lg border border-court-line bg-gradient-to-br from-white via-slate-50 to-court-fog p-4 shadow-inner">
                <img
                  src={racket.image}
                  alt={racket.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-500 ease-out group-hover:scale-[1.04]"
                  onError={(event) => {
                    event.currentTarget.src = '/images/rackets/racket-placeholder.svg';
                  }}
                />
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-black text-court-ink">{racket.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{racket.bestFor}</p>
                </div>
                <SlidersHorizontal className="shrink-0 text-court-blue" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-700">
                <p className="rounded-lg bg-slate-50 px-3 py-2"><span className="text-slate-500">Price</span><br />{racket.price}</p>
                <p className="rounded-lg bg-slate-50 px-3 py-2"><span className="text-slate-500">Head</span><br />{racket.headSize}</p>
                <p className="rounded-lg bg-slate-50 px-3 py-2"><span className="text-slate-500">Weight</span><br />{racket.weight}</p>
                <p className="rounded-lg bg-slate-50 px-3 py-2"><span className="text-slate-500">Pattern</span><br />{racket.stringPattern}</p>
                <p className="rounded-lg bg-slate-50 px-3 py-2"><span className="text-slate-500">RA</span><br />{racket.stiffness}</p>
                <p className="rounded-lg bg-slate-50 px-3 py-2"><span className="text-slate-500">Swingweight</span><br />{racket.swingweight}</p>
              </div>
              <div className="mt-5 space-y-3">
                <Rating label="Power" value={racket.power} />
                <Rating label="Control" value={racket.control} />
                <Rating label="Spin" value={racket.spin} />
                <Rating label="Comfort" value={racket.comfort} />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-court-blue">{racket.archetype}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-court-lime">Difficulty: {racket.difficulty}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{racket.reason}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
