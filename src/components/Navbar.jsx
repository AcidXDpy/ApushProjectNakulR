import { Activity, Dumbbell, Home, Swords, Target, Trophy } from 'lucide-react';

const links = [
  { label: 'Home', id: 'home', icon: Home },
  { label: 'Quiz', id: 'quiz', icon: Target },
  { label: 'Strategy', id: 'strategy', icon: Activity },
  { label: 'Gear', id: 'gear', icon: Trophy },
  { label: 'Training', id: 'training', icon: Dumbbell },
  { label: 'Matchup', id: 'matchup', icon: Swords },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-court-ink/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-court-blue to-slate-200 text-court-ink font-black">CV</span>
          <span>
            <span className="block text-lg font-black tracking-wide">CourtVision</span>
            <span className="hidden text-xs text-slate-400 sm:block">Tennis improvement advisor</span>
          </span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map(({ label, id, icon: Icon }) => (
            <a key={id} href={`#${id}`} className="focus-ring flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
        <a href="#quiz" className="focus-ring rounded-lg bg-court-blue px-4 py-2 text-sm font-bold text-white transition hover:bg-court-green hover:text-court-ink">
          Start Quiz
        </a>
      </nav>
    </header>
  );
}
