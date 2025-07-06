import { NextResponse } from "next/server";
import { quizzes } from "@/data/quizzes";

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  const quiz = quizzes.find((q) => q.id === params.id);
  if (!quiz) {
    return NextResponse.json({ error: "Quiz Not found" }, { status: 404 });
  }
  return NextResponse.json(quiz);
}
