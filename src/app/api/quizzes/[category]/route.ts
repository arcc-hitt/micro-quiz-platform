import { NextResponse } from "next/server";
import { quizzes } from "@/data/quizzes";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;
  const list = quizzes.filter((q) => q.category === category);
  return NextResponse.json(list);
}
