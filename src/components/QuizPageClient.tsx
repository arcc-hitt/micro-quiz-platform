"use client";

import { useState } from "react";
import { Question } from "./Question";
import type { Quiz as QuizType } from "@/data/quizzes";

export default function QuizPageClient({ quiz }: { quiz: QuizType }) {
  const total = quiz.questions.length;

  // per-question answer & submit state
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(
    Array(total).fill(null)
  );
  const [submitted, setSubmitted] = useState<boolean[]>(
    Array(total).fill(false)
  );
  const [score, setScore] = useState(0);

  // track current index and overall finish flag
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQ = quiz.questions[index];

  const handleSubmit = (selected: string) => {
    const newSel = [...selectedAnswers];
    newSel[index] = selected;
    setSelectedAnswers(newSel);

    const newSub = [...submitted];
    newSub[index] = true;
    setSubmitted(newSub);

    if (selected === currentQ.correct) {
      setScore((s) => s + 1);
    }
  };

  const goNext = () => {
    if (index + 1 < total) {
      setIndex((i) => i + 1);
    }
  };
  const goPrev = () => {
    if (index > 0) {
      setIndex((i) => i - 1);
    }
  };
  const handleFinish = () => {
    setFinished(true);
  };

  // If finished, just show the score
  if (finished) {
    return (
      <div className="p-4 sm:p-8 max-w-xl mx-auto text-center space-y-4">
        <p className="text-2xl font-bold">Quiz Complete!</p>
        <p className="text-xl">
          You scored {score} / {total}
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 max-w-xl mx-auto space-y-4 sm:space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold">{quiz.title}</h1>

      <Question
        text={currentQ.text}
        options={currentQ.options}
        onSubmit={handleSubmit}
        selectedAnswer={selectedAnswers[index]}
        disabled={submitted[index]}
      />

      {/* feedback */}
      {submitted[index] && (
        <p className="mt-2 text-base sm:text-lg font-medium text-center">
          {selectedAnswers[index] === currentQ.correct
            ? "✅ Correct!"
            : "❌ Incorrect."}
        </p>
      )}

      {/* navigation */}
      <div className="flex justify-between mt-4 items-center">
        <button
          onClick={goPrev}
          className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-300 rounded disabled:opacity-50"
          disabled={index === 0}
        >
          Previous
        </button>

        <p className="text-sm sm:text-lg">Question {index + 1} / {total}</p>

        {index + 1 < total ? (
          <button
            onClick={goNext}
            className="px-3 py-1 sm:px-4 sm:py-2 bg-green-600 text-white rounded disabled:opacity-50 cursor-pointer"
            disabled={!submitted[index]}
          >
            Next
          </button>
        ) : (
          // Last question, show Finish button
          <button
            onClick={handleFinish}
            className="px-4 py-2 bg-blue-700 text-white rounded disabled:opacity-50 cursor-pointer"
            disabled={!submitted[index]}
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
}