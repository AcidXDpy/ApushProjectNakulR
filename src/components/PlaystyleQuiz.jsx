import { RotateCcw, Trophy } from 'lucide-react';
import { quizQuestions, quizSliders, scoreQuiz } from '../data/playstyles.js';
import Card from './Card.jsx';

export default function PlaystyleQuiz({ answers, setAnswers, onComplete, onReset }) {
  const answeredChoiceCount = quizQuestions.filter((question) => Number.isInteger(answers[question.id])).length;
  const answeredCount = answeredChoiceCount + quizSliders.length;
  const totalInputs = quizQuestions.length + quizSliders.length;
  const complete = answeredChoiceCount === quizQuestions.length;

  function choose(questionId, optionIndex) {
    setAnswers((current) => ({ ...current, [questionId]: optionIndex }));
  }

  function chooseSlider(sliderId, value) {
    setAnswers((current) => ({ ...current, [sliderId]: Number(value) }));
  }

  function sliderValue(slider) {
    return Number(answers[slider.id] ?? slider.defaultValue);
  }

  function finishQuiz() {
    if (!complete) return;
    const sliderDefaults = Object.fromEntries(quizSliders.map((slider) => [slider.id, slider.defaultValue]));
    onComplete(scoreQuiz({ ...sliderDefaults, ...answers }));
  }

  return (
    <section id="quiz" className="section-pad border-y border-court-line bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-court-blue">Playstyle Quiz</p>
            <h2 className="mt-2 text-3xl font-black text-court-ink sm:text-4xl">Build your player profile</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              Choose the closest patterns, then tune the sliders. There is no right answer here; the goal is to model how you actually want the gear to respond.
            </p>
          </div>
          <div className="soft-panel min-w-56 p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Progress</span>
              <span className="font-bold">{answeredCount}/{totalInputs}</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-gradient-to-r from-court-blue to-court-green transition-all" style={{ width: `${(answeredCount / totalInputs) * 100}%` }} />
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {quizQuestions.map((question, index) => (
            <Card key={question.id}>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-court-blue">Question {index + 1}</p>
              <h3 className="mt-2 text-lg font-bold text-court-ink">{question.question}</h3>
              {question.id === 'armHealth' && (
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  This is gear guidance, not medical advice. Pain that changes your swing is worth checking with a qualified clinician or coach.
                </p>
              )}
              <div className="mt-4 grid gap-2">
                {question.options.map((option, optionIndex) => {
                  const selected = answers[question.id] === optionIndex;
                  return (
                    <button
                      key={option.label}
                      onClick={() => choose(question.id, optionIndex)}
                      className={`focus-ring rounded-lg border px-4 py-3 text-left text-sm transition ${
                        selected ? 'border-court-green bg-court-green/25 text-court-ink' : 'border-court-line bg-slate-50 text-slate-700 hover:border-court-blue/60 hover:bg-court-blue/5'
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-court-blue">Calibration Sliders</p>
              <h3 className="mt-2 text-2xl font-black text-court-ink">Tune the gray areas</h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              These scales personalize the recommendations beyond a single playstyle category.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {quizSliders.map((slider) => {
              const value = sliderValue(slider);

              return (
                <Card key={slider.id}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-court-blue">Scale</p>
                      <h4 className="mt-2 text-lg font-black text-court-ink">{slider.label}</h4>
                    </div>
                    <span className="rounded-lg bg-court-lime/20 px-3 py-1 text-sm font-black text-court-ink">{value}/10</span>
                  </div>
                  <input
                    aria-label={slider.label}
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={value}
                    onChange={(event) => chooseSlider(slider.id, event.target.value)}
                    className="mt-5 w-full accent-court-blue"
                  />
                  <div className="mt-2 flex justify-between gap-4 text-xs font-bold text-slate-500">
                    <span>{slider.lowLabel}</span>
                    <span className="text-right">{slider.highLabel}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={finishQuiz}
            disabled={!complete}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-court-green px-5 py-3 font-black text-court-ink transition hover:bg-court-blue hover:text-white disabled:cursor-not-allowed disabled:opacity-45"
          >
            <Trophy size={18} />
            Show my dashboard
          </button>
          <button onClick={onReset} className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-court-ink/15 px-5 py-3 font-bold text-court-ink transition hover:border-court-blue hover:bg-court-blue/10">
            <RotateCcw size={18} />
            Reset quiz
          </button>
        </div>
      </div>
    </section>
  );
}
