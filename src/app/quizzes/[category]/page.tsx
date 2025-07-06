import { QuizCard } from "@/components/QuizCard";
import { Quiz } from "@/data/quizzes";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  return {
    title: `${category} Quizzes`,
    description: `All ${category} quizzes`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const res = await fetch(
    `http://localhost:3000/api/quizzes/${encodeURIComponent(category)}`,
    { cache: "no-store" }
  );
  const quizzes: Quiz[] = await res.json();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">{category} Quizzes</h1>
      <div className="flex flex-col space-y-4">
        {quizzes.map((q: any) => (
          <QuizCard key={q.id} id={q.id} title={q.title} />
        ))}
      </div>
    </main>
  );
}
