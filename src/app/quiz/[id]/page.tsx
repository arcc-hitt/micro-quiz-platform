import { Metadata } from "next";
import QuizPageClient from "@/components/QuizPageClient";
import type { Quiz as QuizType } from "@/data/quizzes";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Quiz ${id}`,
    description: `Take the quiz ${id}`,
  };
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(
    `http://localhost:3000/api/quiz/${encodeURIComponent(id)}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Quiz not found");
  }
  const quiz: QuizType = await res.json();

  return <QuizPageClient quiz={quiz} />;
}
