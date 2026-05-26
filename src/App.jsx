import { useMemo, useState } from 'react';
import Hero from './components/Hero.jsx';
import MatchupAdvisor from './components/MatchupAdvisor.jsx';
import Navbar from './components/Navbar.jsx';
import PlaystyleQuiz from './components/PlaystyleQuiz.jsx';
import RacketFinder from './components/RacketFinder.jsx';
import ResultsDashboard from './components/ResultsDashboard.jsx';
import StrategyAdvisor from './components/StrategyAdvisor.jsx';
import StringFinder from './components/StringFinder.jsx';
import TrainingPlan from './components/TrainingPlan.jsx';
import { playstyleNames } from './data/playstyles.js';

export default function App() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [manualStyle, setManualStyle] = useState(playstyleNames[0]);
  const [opponentStyle, setOpponentStyle] = useState('Defensive Grinder');

  const activeStyle = useMemo(() => result?.primary || manualStyle, [manualStyle, result]);

  function startQuiz() {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  }

  function completeQuiz(nextResult) {
    setResult(nextResult);
    setManualStyle(nextResult.primary);
    window.setTimeout(() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' }), 100);
  }

  function resetQuiz() {
    setAnswers({});
    setResult(null);
  }

  function setGlobalStyle(style) {
    setManualStyle(style);
  }

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main>
        <Hero onStartQuiz={startQuiz} />
        <PlaystyleQuiz answers={answers} setAnswers={setAnswers} onComplete={completeQuiz} onReset={resetQuiz} />
        <ResultsDashboard result={result} />
        <StrategyAdvisor selectedStyle={activeStyle} setSelectedStyle={setGlobalStyle} />
        <RacketFinder selectedStyle={activeStyle} setSelectedStyle={setGlobalStyle} />
        <StringFinder selectedStyle={activeStyle} setSelectedStyle={setGlobalStyle} />
        <TrainingPlan selectedStyle={activeStyle} setSelectedStyle={setGlobalStyle} />
        <MatchupAdvisor playerStyle={activeStyle} opponentStyle={opponentStyle} setPlayerStyle={setGlobalStyle} setOpponentStyle={setOpponentStyle} />
      </main>
      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-500">
        CourtVision MVP - frontend-only, local data, ready for Vercel.
      </footer>
    </div>
  );
}
