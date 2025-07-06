"use client";

import { useState } from "react";
import { Question } from "./Question";
import type { Quiz as QuizType } from "@/data/quizzes";

export default function QuizPageClient({ quiz }: { quiz: QuizType }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore((s) => s + 1);
    if (index + 1 < quiz.questions.length) {
      setIndex((i) => i + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">{quiz.title}</h1>

      {!finished ? (
        <Question
          text={quiz.questions[index].text}
          options={quiz.questions[index].options}
          correct={quiz.questions[index].correct}
          onAnswer={handleAnswer}
        />
      ) : (
        <div className="text-center space-y-4">
          <p className="text-xl">
            You scored {score} / {quiz.questions.length}
          </p>
        </div>
      )}
    </main>
  );
}
