import Link from "next/link";

export function QuizCard({ id, title }: { id: string; title: string }) {
  return (
    <Link href={`/quiz/${id}`}>
      <div className="p-4 border rounded-lg hover:bg-gray-50 transition">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
    </Link>
  );
}
