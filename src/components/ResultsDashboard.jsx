import { CheckCircle2, Target, Zap } from 'lucide-react';
import { playstyles } from '../data/playstyles.js';
import { rackets } from '../data/rackets.js';
import { strings } from '../data/strings.js';
import Card from './Card.jsx';

function ListBlock({ title, items }) {
  return (
    <Card>
      <h3 className="text-lg font-black text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
            <CheckCircle2 className="mt-1 shrink-0 text-court-blue" size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default function ResultsDashboard({ result }) {
  if (!result) {
    return (
      <section id="results" className="section-pad">
        <div className="mx-auto max-w-7xl">
          <Card className="text-center">
            <Target className="mx-auto text-court-blue" size={34} />
            <h2 className="mt-4 text-2xl font-black">Your results dashboard will appear here</h2>
            <p className="mt-2 text-slate-400">Complete the quiz to unlock your playstyle, strategy, gear, and training recommendations.</p>
          </Card>
        </div>
      </section>
    );
  }

  const primary = playstyles[result.primary];
  const secondary = playstyles[result.secondary];
  const recommendedRackets = rackets.filter((racket) => racket.recommendedPlaystyles.includes(result.primary) || racket.recommendedPlaystyles.includes(result.secondary)).slice(0, 3);
  const recommendedStrings = strings.filter((string) => string.recommendedPlaystyles.includes(result.primary) || string.recommendedPlaystyles.includes(result.secondary)).slice(0, 2);

  return (
    <section id="results" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="bg-gradient-to-br from-court-blue/12 via-white/[0.04] to-court-lime/10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-court-blue">Results Dashboard</p>
            <h2 className="mt-3 text-4xl font-black text-white">{result.primary}</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{primary.identity}</p>
          </Card>
          <Card>
            <p className="text-sm text-slate-400">Secondary style</p>
            <h3 className="mt-2 text-2xl font-black text-white">{result.secondary}</h3>
            <p className="mt-4 text-sm leading-6 text-slate-400">{secondary.identity}</p>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <ListBlock title="Strengths" items={primary.strengths} />
          <ListBlock title="Weaknesses" items={primary.weaknesses} />
          <ListBlock title="Tactical Priorities" items={primary.tacticalPriorities} />
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <ListBlock title="Practice Focus" items={primary.practiceFocus} />
          <Card className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Zap className="text-court-lime" />
              <h3 className="text-lg font-black">Recommended Setup</h3>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm font-bold text-court-blue">Rackets</p>
                <div className="mt-3 space-y-2">
                  {recommendedRackets.map((racket) => (
                    <p key={racket.name} className="rounded-lg bg-white/[0.04] px-3 py-2 text-sm text-slate-300">{racket.name}</p>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-court-lime">Strings / Tension</p>
                <div className="mt-3 space-y-2">
                  {recommendedStrings.map((string) => (
                    <p key={string.type} className="rounded-lg bg-white/[0.04] px-3 py-2 text-sm text-slate-300">{string.type}: {string.tensionRange}</p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
