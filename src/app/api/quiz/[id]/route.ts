import { Quiz, quizzes } from "@/data/quizzes";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<Quiz | { error: string }>) {
  const { id } = req.query;
  const quiz = quizzes.find((q) => q.id === id);
  if (!quiz) return res.status(404).json({ error: "Quiz not found" });
  res.status(200).json(quiz);
}
