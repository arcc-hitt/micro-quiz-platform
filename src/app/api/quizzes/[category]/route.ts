import { Quiz, quizzes } from "@/data/quizzes";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<Quiz[]>) {
  const { cat } = req.query;
  const list = quizzes.filter((q) => q.category === cat);
  res.status(200).json(list);
}
