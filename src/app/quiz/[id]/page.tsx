"use client";
import { useState } from "react";
import { Question } from "@/components/Question";

interface Quiz {
  id: string;
  title: string;
  questions: {
    id: string;
    text: string;
    options: { id: string; text: string }[];
    correct: string;
  }[];
}

export const dynamic = "force-dynamic";

export default function QuizPageClient({ quiz }: { quiz: Quiz }) {
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

// Wrap the Server–Client boundary
import { cookies } from "next/headers";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;
  return {
    title: `Quiz ${id}`,
    description: `Take quiz ${id}`,
  };
}

export async function getServerSideProps({ params }: { params: { id: string } }) {
  // (Not real App Router—here’s how to do it with a Server Component below instead)
}

export default async function QuizPage({ params }: { params: { id: string } }) {
  // Server Component: fetch quiz
  const res = await fetch(`http://localhost:3000/api/quiz/${params.id}`, { cache: "no-store" });
  const quiz: Quiz = await res.json();

  // then render the client wrapper
  return <QuizPageClient quiz={quiz} />;
}
