import Link from "next/link";
import Image from "next/image";

export function CategoryCard({ name }: { name: string }) {
  return (
    <Link href={`/quizzes/${encodeURIComponent(name)}`} passHref>
      <div className="p-4 border rounded-lg hover:shadow-lg transition">
        <Image src="/logo.png" alt={name} width={60} height={60} />
        <h2 className="mt-2 text-xl font-semibold">{name}</h2>
      </div>
    </Link>
  );
}
