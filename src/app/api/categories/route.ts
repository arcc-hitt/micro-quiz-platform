import { NextResponse } from "next/server";
import { quizzes } from "@/data/quizzes";

export async function GET() {
  const cats = Array.from(new Set(quizzes.map((q) => q.category)));
  return NextResponse.json(cats);
}
