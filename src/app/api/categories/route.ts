import { quizzes } from "@/data/quizzes";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<string[]>) {
  const cats = Array.from(new Set(quizzes.map((q) => q.category)));
  res.status(200).json(cats);
}
