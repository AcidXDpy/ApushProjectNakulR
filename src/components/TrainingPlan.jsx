import { Clock, Dumbbell } from 'lucide-react';
import { drills } from '../data/drills.js';
import { playstyleNames } from '../data/playstyles.js';
import Card from './Card.jsx';

export default function TrainingPlan({ selectedStyle, setSelectedStyle }) {
  return (
    <section id="training" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-court-blue">Training Plan</p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Five drills for your style</h2>
          </div>
          <select value={selectedStyle} onChange={(event) => setSelectedStyle(event.target.value)} className="focus-ring rounded-lg border border-white/15 bg-court-panel px-4 py-3 text-white">
            {playstyleNames.map((name) => <option key={name}>{name}</option>)}
          </select>
        </div>
        <div className="grid gap-4 lg:grid-cols-5">
          {drills[selectedStyle].map((drill) => (
            <Card key={drill.name} className="lg:col-span-1">
              <Dumbbell className="text-court-blue" />
              <h3 className="mt-4 text-lg font-black text-white">{drill.name}</h3>
              <p className="mt-3 text-sm font-bold text-court-lime">{drill.purpose}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{drill.how}</p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                <Clock size={14} />
                {drill.reps}
              </div>
              <p className="mt-2 text-xs text-slate-500">Difficulty: {drill.difficulty}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
