import { NextResponse } from "next/server";
import { quizzes } from "@/data/quizzes";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const quiz = quizzes.find((q) => q.id === id);
  if (!quiz) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(quiz);
}