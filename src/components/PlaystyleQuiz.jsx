import { RotateCcw, Trophy } from 'lucide-react';
import { quizQuestions, scoreQuiz } from '../data/playstyles.js';
import Card from './Card.jsx';

export default function PlaystyleQuiz({ answers, setAnswers, onComplete, onReset }) {
  const answeredCount = Object.keys(answers).length;
  const complete = answeredCount === quizQuestions.length;

  function choose(questionId, optionIndex) {
    setAnswers((current) => ({ ...current, [questionId]: optionIndex }));
  }

  function finishQuiz() {
    if (!complete) return;
    onComplete(scoreQuiz(answers));
  }

  return (
    <section id="quiz" className="section-pad border-y border-white/10 bg-black/15">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-court-blue">Playstyle Quiz</p>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">Classify your tennis identity</h2>
          </div>
          <div className="soft-panel min-w-56 p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Progress</span>
              <span className="font-bold">{answeredCount}/{quizQuestions.length}</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gradient-to-r from-court-blue to-court-green transition-all" style={{ width: `${(answeredCount / quizQuestions.length) * 100}%` }} />
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {quizQuestions.map((question, index) => (
            <Card key={question.id}>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-court-blue">Question {index + 1}</p>
              <h3 className="mt-2 text-lg font-bold text-white">{question.question}</h3>
              <div className="mt-4 grid gap-2">
                {question.options.map((option, optionIndex) => {
                  const selected = answers[question.id] === optionIndex;
                  return (
                    <button
                      key={option.label}
                      onClick={() => choose(question.id, optionIndex)}
                      className={`focus-ring rounded-lg border px-4 py-3 text-left text-sm transition ${
                        selected ? 'border-court-blue bg-court-blue/20 text-white' : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-court-blue/60 hover:bg-white/[0.06]'
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

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={finishQuiz}
            disabled={!complete}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-court-blue px-5 py-3 font-black text-white transition hover:bg-court-green hover:text-court-ink disabled:cursor-not-allowed disabled:opacity-45"
          >
            <Trophy size={18} />
            Show my dashboard
          </button>
          <button onClick={onReset} className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-bold text-white transition hover:border-court-blue hover:bg-white/10">
            <RotateCcw size={18} />
            Reset quiz
          </button>
        </div>
      </div>
    </section>
  );
}
