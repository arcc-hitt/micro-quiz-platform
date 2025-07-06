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

  let quiz: QuizType;
  try {
    const res = await fetch(`http://localhost:3000/api/quiz/${encodeURIComponent(id)}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    quiz = await res.json();
  } catch (err: any) {
    throw new Error("Error loading quiz: " + err.message);
  }

  return <QuizPageClient quiz={quiz} />;
}
