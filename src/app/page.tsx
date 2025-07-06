import { Metadata } from "next";
import { CategoryCard } from "../components/CategoryCard";

export const metadata: Metadata = {
  title: "Micro‑Quiz Home",
  description: "Choose a quiz category",
};

const categoryIcons: Record<string, string> = {
  History: "/history.svg",
  Science: "/science.svg",
  Math: "/math.svg",
  Programming: "/programming.svg",
};

export default async function Home() {
  let categories: string[];

  try {
    const res = await fetch("http://localhost:3000/api/categories");
    if (!res.ok) throw new Error(`Failed to load categories (${res.status})`);
    categories = await res.json();
  } catch (err: any) {
    throw new Error("Error loading categories: " + err.message);
  }

  return (
    <>
      <header className="bg-gray-100 p-4 text-center">
        <h1 className="text-2xl font-bold">Welcome to Micro-Quiz</h1>
        <p className="mt-2 text-gray-600">Choose a quiz category to get started.</p>
      </header>
      
      <main className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <h1 className="col-span-full text-2xl font-bold">Quiz Categories</h1>
        {categories.map((c) => (
          <CategoryCard key={c} name={c} icon={categoryIcons[c] || "/default.svg"} />
        ))}
      </main>
    </>
  );
}
