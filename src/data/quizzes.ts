export interface Quiz {
  id: string;
  category: string;
  title: string;
  questions: {
    id: string;
    text: string;
    options: { id: string; text: string }[];
    correct: string;
  }[];
}

export const quizzes: Quiz[] = [
  {
    id: "q1",
    category: "History",
    title: "Ancient Civilizations",
    questions: [
      {
        id: "h1",
        text: "Which river was central to Ancient Egypt?",
        options: [
          { id: "a", text: "Nile" },
          { id: "b", text: "Tigris" },
          { id: "c", text: "Amazon" },
          { id: "d", text: "Mississippi" },
        ],
        correct: "a",
      },
      // … more questions
    ],
  },
  {
    id: "q2",
    category: "Science",
    title: "Basic Physics",
    questions: [
      {
        id: "s1",
        text: "What is the unit of force?",
        options: [
          { id: "a", text: "Watt" },
          { id: "b", text: "Newton" },
          { id: "c", text: "Pascal" },
          { id: "d", text: "Joule" },
        ],
        correct: "b",
      },
      // … more questions
    ],
  },
  // … more quizzes
];
