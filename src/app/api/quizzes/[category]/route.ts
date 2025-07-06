import { NextResponse } from "next/server";
import { quizzes } from "@/data/quizzes";

export async function GET(
  _: Request,
  { params }: { params: { category: string } }
) {
  const list = quizzes.filter((q) => q.category === params.category);
  return NextResponse.json(list);
}
