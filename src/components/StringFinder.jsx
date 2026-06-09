import { useState } from 'react';
import { Cable } from 'lucide-react';
import { strings } from '../data/strings.js';
import { playstyleNames } from '../data/playstyles.js';
import { scoreSetup } from '../data/recommendationModel.js';
import Card from './Card.jsx';

function Rating({ label, value }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs text-slate-500">
        <span>{label}</span>
        <span>{value}/10</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <div className="rating-fill h-full rounded-full bg-gradient-to-r from-court-lime to-court-blue" style={{ '--rating-width': `${value * 10}%` }} />
      </div>
    </div>
  );
}

const referenceRacket = {
  price: '$260.00',
  power: 7,
  control: 7,
  spin: 7,
  comfort: 8,
  stiffness: 63,
  swingweight: 320,
  weight: '300g / 10.6oz',
  recommendedPlaystyles: ['All-Court Player'],
  archetype: 'Balanced Control',
  name: 'Reference frame',
};

function fitScore(string, result) {
  if (!result) return null;
  return scoreSetup({ ...referenceRacket, recommendedPlaystyles: [result.primary, result.secondary] }, string, result).finalScore;
}

export default function StringFinder({ selectedStyle, setSelectedStyle, result }) {
  const [showAll, setShowAll] = useState(false);
  const [sortMode, setSortMode] = useState('fit');
  const baseStrings = showAll ? strings : strings.filter((string) => string.recommendedPlaystyles.includes(selectedStyle));
  const filtered = [...baseStrings].sort((a, b) => {
    if (sortMode === 'comfort') return b.comfort - a.comfort;
    if (sortMode === 'spin') return b.spin - a.spin;
    if (sortMode === 'control') return b.control - a.control;
    if (sortMode === 'value') return Number(a.price.replace(/[^0-9.]/g, '')) - Number(b.price.replace(/[^0-9.]/g, ''));
    if (result) return fitScore(b, result) - fitScore(a, result);
    return 0;
  });

  return (
    <section id="strings" className="section-pad border-y border-court-line bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-court-blue">String Finder</p>
            <h2 className="mt-2 text-3xl font-black text-court-ink sm:text-4xl">Tune feel, launch, and comfort</h2>
            <p className="mt-3 text-sm text-slate-500">{filtered.length} strings shown</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="action-button focus-within:ring-court-blue flex items-center gap-3 rounded-lg border border-court-line bg-white px-4 py-3 text-sm font-bold text-court-ink shadow-card focus-within:ring-2">
              <input type="checkbox" checked={showAll} onChange={(event) => setShowAll(event.target.checked)} className="h-4 w-4 accent-court-blue" />
              Show all strings
            </label>
            <select value={selectedStyle} onChange={(event) => setSelectedStyle(event.target.value)} className="focus-ring rounded-lg border border-court-line bg-white px-4 py-3 text-court-ink shadow-card" disabled={showAll}>
              {playstyleNames.map((name) => <option key={name}>{name}</option>)}
            </select>
            <select value={sortMode} onChange={(event) => setSortMode(event.target.value)} className="focus-ring rounded-lg border border-court-line bg-white px-4 py-3 text-court-ink shadow-card">
              <option value="fit">Sort by profile fit</option>
              <option value="comfort">Sort by comfort</option>
              <option value="spin">Sort by spin</option>
              <option value="control">Sort by control</option>
              <option value="value">Sort by value</option>
            </select>
          </div>
        </div>
        <div className="catalog-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((string, index) => {
            const profileFit = fitScore(string, result);

            return (
            <Card key={string.name} className="group reveal-card" style={{ '--reveal-delay': `${Math.min(index, 12) * 45}ms` }}>
              <div className="mb-5 flex aspect-[5/3] items-center justify-center overflow-hidden rounded-lg border border-court-line bg-gradient-to-br from-white via-slate-50 to-court-fog p-4 shadow-inner">
                <img
                  src={string.image}
                  alt={string.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-500 ease-out group-hover:scale-[1.04]"
                  onError={(event) => {
                    event.currentTarget.src = '/images/strings/string-placeholder.svg';
                  }}
                />
              </div>
              <div className="flex items-start justify-between gap-3">
                <Cable className="shrink-0 text-court-blue" />
                {profileFit !== null && (
                  <span className="rounded-lg bg-court-lime/20 px-2 py-1 text-xs font-black text-court-ink">{profileFit}/100 fit</span>
                )}
              </div>
              <h3 className="mt-4 text-xl font-black text-court-ink">{string.name}</h3>
              <p className="mt-2 text-sm font-bold text-court-blue">{string.stringType} / {string.tensionRange}</p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-700">
                <p className="rounded-lg bg-slate-50 px-3 py-2"><span className="text-slate-500">Price</span><br />{string.price}</p>
                <p className="rounded-lg bg-slate-50 px-3 py-2"><span className="text-slate-500">Gauge</span><br />{string.gauge}</p>
                <p className="rounded-lg bg-slate-50 px-3 py-2"><span className="text-slate-500">Line</span><br />{string.line}</p>
                <p className="rounded-lg bg-slate-50 px-3 py-2"><span className="text-slate-500">Stiffness</span><br />{string.stiffness}</p>
              </div>
              <div className="mt-5 space-y-3">
                <Rating label="Power" value={string.power} />
                <Rating label="Control" value={string.control} />
                <Rating label="Spin" value={string.spin} />
                <Rating label="Comfort" value={string.comfort} />
                <Rating label="Durability" value={string.durability} />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-court-lime">{string.archetype}</p>
              <p className="mt-4 text-sm leading-6 text-slate-700">{string.bestFor}</p>
              <p className="mt-4 rounded-lg border border-court-green/30 bg-court-green/10 p-3 text-sm leading-6 text-court-ink">{string.warnings}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{string.reason}</p>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
