import { ArrowRight, Cable, Gauge, Sparkles } from 'lucide-react';
import Card from './Card.jsx';

export default function Hero({ onStartQuiz }) {
  return (
    <section id="home" className="section-pad hero-parallax relative overflow-hidden">
      <div className="court-lines" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal-up">
          <p className="mb-4 inline-flex rounded-lg border border-court-blue/30 bg-court-blue/10 px-3 py-1 text-sm font-semibold text-court-green">
            Frontend-only MVP
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            CourtVision
            <span className="block accent-text">for smarter tennis gear.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Discover how your racket, strings, tension, and frame specs can change your power, spin, control, comfort, and confidence on court.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={onStartQuiz} className="focus-ring action-button inline-flex items-center justify-center gap-2 rounded-lg bg-court-blue px-5 py-3 font-bold text-white hover:bg-court-green hover:text-court-ink">
              Take the quiz <ArrowRight size={18} />
            </button>
            <a href="#gear" className="focus-ring action-button inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 font-bold text-white hover:border-court-blue hover:bg-white/10">
              Browse gear
            </a>
          </div>
        </div>

        <div className="reveal-up grid gap-4 [animation-delay:140ms]">
          <Card className="floating-card bg-gradient-to-br from-white/[0.08] via-court-blue/[0.06] to-court-lime/[0.06]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">Live profile</p>
                <h2 className="mt-1 text-2xl font-black">Aggressive Baseliner</h2>
              </div>
              <Sparkles className="text-court-green" />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ['Power', '88%'],
                ['Control', '74%'],
                ['Spin', '81%'],
              ].map(([label, value]) => (
                <div key={label} className="soft-panel p-3">
                  <p className="text-xs text-slate-400">{label}</p>
                  <p className="stat-pop mt-1 text-xl font-black text-white">{value}</p>
                </div>
              ))}
            </div>
          </Card>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="[animation-delay:220ms]">
              <Gauge className="mb-4 text-court-blue" />
              <h3 className="font-bold">Frame effects</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Compare weight, stiffness, swingweight, and head size against how you want the ball to leave the strings.</p>
            </Card>
            <Card className="[animation-delay:300ms]">
              <Cable className="mb-4 text-court-lime" />
              <h3 className="font-bold">String tuning</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Pair racket recommendations with string type and tension ranges that shift feel, launch, spin, and comfort.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
