import { Metadata } from "next";
import { CategoryCard } from "../components/CategoryCard";

export const metadata: Metadata = {
  title: "Micro‑Quiz Home",
  description: "Choose a quiz category",
};

export default async function Home() {
  const res = await fetch(`http://localhost:3000/api/categories`);
  const categories: string[] = await res.json();

  return (
    <main className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((c) => (
        <CategoryCard key={c} name={c} />
      ))}
    </main>
  );
}
