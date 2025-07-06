import { QuizCard } from "@/components/QuizCard";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  return {
    title: `${params.category} Quizzes`,
    description: `All ${params.category} quizzes`,
  };
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const res = await fetch(`http://localhost:3000/api/quizzes/${encodeURIComponent(category)}`, {
    cache: "no-store",  // no-store + dynamic = SSR
  });
  const quizzes = await res.json();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">{category} Quizzes</h1>
      <div className="space-y-4">
        {quizzes.map((q: any) => (
          <QuizCard key={q.id} id={q.id} title={q.title} />
        ))}
      </div>
    </main>
  );
}
