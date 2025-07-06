import Link from "next/link";

export function QuizCard({ id, title }: { id: string; title: string }) {
  return (
    <Link href={`/quiz/${id}`}>
      <div className="flex justify-between p-4 border rounded-lg hover:bg-gray-50 transition">
        <h3 className="text-lg font-medium">{title}</h3>
        <h6 className="text-sm font-normal text-blue-400">Click to Start the Quiz!</h6>
      </div>
    </Link>
  );
}
