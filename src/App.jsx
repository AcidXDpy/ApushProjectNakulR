import { useEffect, useMemo, useState } from 'react';
import GearStory from './components/GearStory.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import PlaystyleQuiz from './components/PlaystyleQuiz.jsx';
import RacketFinder from './components/RacketFinder.jsx';
import ResultsDashboard from './components/ResultsDashboard.jsx';
import StringFinder from './components/StringFinder.jsx';
import { playstyleNames } from './data/playstyles.js';

const routes = new Set(['home', 'quiz', 'gear', 'strings', 'results']);

function readRoute() {
  const hash = window.location.hash.replace('#', '');
  return routes.has(hash) ? hash : 'home';
}

export default function App() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [manualStyle, setManualStyle] = useState(playstyleNames[0]);
  const [route, setRoute] = useState(readRoute);

  const activeStyle = useMemo(() => result?.primary || manualStyle, [manualStyle, result]);
  const activePage = route === 'results' ? 'quiz' : route;

  useEffect(() => {
    function syncRoute() {
      const nextRoute = readRoute();
      setRoute(nextRoute);
      window.setTimeout(() => {
        if (nextRoute === 'results') {
          document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }

    syncRoute();
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  function startQuiz() {
    window.location.hash = 'quiz';
  }

  function completeQuiz(nextResult) {
    setResult(nextResult);
    setManualStyle(nextResult.primary);
    window.location.hash = 'results';
  }

  function resetQuiz() {
    setAnswers({});
    setResult(null);
  }

  function setGlobalStyle(style) {
    setManualStyle(style);
  }

  return (
    <div className="min-h-screen text-court-ink">
      <Navbar activePage={activePage} />
      <main>
        {activePage === 'home' && (
          <>
            <Hero onStartQuiz={startQuiz} />
            <GearStory />
          </>
        )}
        {activePage === 'quiz' && (
          <>
            <PlaystyleQuiz answers={answers} setAnswers={setAnswers} onComplete={completeQuiz} onReset={resetQuiz} />
            <ResultsDashboard result={result} />
          </>
        )}
        {activePage === 'gear' && <RacketFinder selectedStyle={activeStyle} setSelectedStyle={setGlobalStyle} />}
        {activePage === 'strings' && <StringFinder selectedStyle={activeStyle} setSelectedStyle={setGlobalStyle} />}
      </main>
      <footer className="border-t border-court-line bg-white px-4 py-8 text-center text-sm text-slate-500">
        CourtVision MVP - frontend-only gear guidance, local data, ready for Vercel.
      </footer>
    </div>
  );
}
