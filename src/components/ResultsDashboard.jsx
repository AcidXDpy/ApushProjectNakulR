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

function GearImpactBlock({ result }) {
  const impacts = [
    `Your ${result.primary.toLowerCase()} profile should prioritize frames that support your natural shot shape without forcing extra effort.`,
    `The secondary ${result.secondary.toLowerCase()} lean is useful for deciding whether to bias toward more control, comfort, spin, or free power.`,
    'Use racket specs and string tension together: a powerful frame can be calmed down with control strings, while a control frame can be opened up with livelier strings.',
  ];

  return <ListBlock title="Gear Impact" items={impacts} />;
}

export default function ResultsDashboard({ result }) {
  if (!result) {
    return (
      <section id="results" className="section-pad">
        <div className="mx-auto max-w-7xl">
          <Card className="text-center">
            <Target className="mx-auto text-court-blue" size={34} />
            <h2 className="mt-4 text-2xl font-black">Your gear profile will appear here</h2>
            <p className="mt-2 text-slate-400">Complete the quiz to unlock racket, string, tension, and setup recommendations.</p>
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
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-court-blue">Gear Profile</p>
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
          <GearImpactBlock result={result} />
          <ListBlock title="Setup Watchouts" items={primary.weaknesses} />
        </div>

        <div className="mt-4 grid gap-4">
          <Card>
            <div className="flex items-center gap-3">
              <Zap className="text-court-lime" />
              <h3 className="text-lg font-black">Recommended Gear Setup</h3>
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
                    <p key={string.name} className="rounded-lg bg-white/[0.04] px-3 py-2 text-sm text-slate-300">{string.name}: {string.tensionRange}</p>
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
