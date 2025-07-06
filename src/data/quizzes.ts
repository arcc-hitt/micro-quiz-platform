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
  // — HISTORY —
  {
    id: "history1",
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
          { id: "d", text: "Yellow" },
        ],
        correct: "a",
      },
      {
        id: "h2",
        text: "The Great Wall of China was primarily built to protect against which group?",
        options: [
          { id: "a", text: "Mongols" },
          { id: "b", text: "Romans" },
          { id: "c", text: "Persians" },
          { id: "d", text: "Vikings" },
        ],
        correct: "a",
      },
      {
        id: "h3",
        text: "Which empire was ruled by Alexander the Great?",
        options: [
          { id: "a", text: "Roman Empire" },
          { id: "b", text: "Macedonian Empire" },
          { id: "c", text: "Ottoman Empire" },
          { id: "d", text: "Persian Empire" },
        ],
        correct: "b",
      },
    ],
  },
  {
    id: "history2",
    category: "History",
    title: "World War II Overview",
    questions: [
      {
        id: "h4",
        text: "In which year did World War II begin?",
        options: [
          { id: "a", text: "1935" },
          { id: "b", text: "1939" },
          { id: "c", text: "1941" },
          { id: "d", text: "1945" },
        ],
        correct: "b",
      },
      {
        id: "h5",
        text: "Which country was NOT part of the Axis powers?",
        options: [
          { id: "a", text: "Germany" },
          { id: "b", text: "Japan" },
          { id: "c", text: "Italy" },
          { id: "d", text: "Soviet Union" },
        ],
        correct: "d",
      },
    ],
  },

  // — SCIENCE —
  {
    id: "science1",
    category: "Science",
    title: "Basic Physics",
    questions: [
      {
        id: "s1",
        text: "What is the SI unit of force?",
        options: [
          { id: "a", text: "Watt" },
          { id: "b", text: "Newton" },
          { id: "c", text: "Pascal" },
          { id: "d", text: "Joule" },
        ],
        correct: "b",
      },
      {
        id: "s2",
        text: "Which law explains why you feel pushed back in a fast car?",
        options: [
          { id: "a", text: "Newton's First Law" },
          { id: "b", text: "Hooke's Law" },
          { id: "c", text: "Ohm's Law" },
          { id: "d", text: "Boyle's Law" },
        ],
        correct: "a",
      },
    ],
  },
  {
    id: "science2",
    category: "Science",
    title: "Chemistry Basics",
    questions: [
      {
        id: "s3",
        text: "What is the chemical symbol for Gold?",
        options: [
          { id: "a", text: "Au" },
          { id: "b", text: "Ag" },
          { id: "c", text: "Gd" },
          { id: "d", text: "Ga" },
        ],
        correct: "a",
      },
      {
        id: "s4",
        text: "pH value of 7 indicates a substance is:",
        options: [
          { id: "a", text: "Acidic" },
          { id: "b", text: "Neutral" },
          { id: "c", text: "Basic" },
          { id: "d", text: "Saline" },
        ],
        correct: "b",
      },
    ],
  },

  // — MATH —
  {
    id: "math1",
    category: "Math",
    title: "Algebra Fundamentals",
    questions: [
      {
        id: "m1",
        text: "Solve for x: 2x + 5 = 13",
        options: [
          { id: "a", text: "4" },
          { id: "b", text: "6" },
          { id: "c", text: "8" },
          { id: "d", text: "5" },
        ],
        correct: "a",
      },
      {
        id: "m2",
        text: "What is the slope of the line y = 3x – 4 ?",
        options: [
          { id: "a", text: "–4" },
          { id: "b", text: "3" },
          { id: "c", text: "4" },
          { id: "d", text: "–3" },
        ],
        correct: "b",
      },
    ],
  },
  {
    id: "math2",
    category: "Math",
    title: "Geometry Quick Quiz",
    questions: [
      {
        id: "m3",
        text: "How many degrees are in a right angle?",
        options: [
          { id: "a", text: "45°" },
          { id: "b", text: "90°" },
          { id: "c", text: "180°" },
          { id: "d", text: "360°" },
        ],
        correct: "b",
      },
      {
        id: "m4",
        text: "The sum of interior angles in a triangle is:",
        options: [
          { id: "a", text: "180°" },
          { id: "b", text: "360°" },
          { id: "c", text: "90°" },
          { id: "d", text: "270°" },
        ],
        correct: "a",
      },
    ],
  },

  // — PROGRAMMING —
  {
    id: "prog1",
    category: "Programming",
    title: "JavaScript Basics",
    questions: [
      {
        id: "p1",
        text: "Which keyword declares a variable that cannot be reassigned?",
        options: [
          { id: "a", text: "let" },
          { id: "b", text: "var" },
          { id: "c", text: "const" },
          { id: "d", text: "static" },
        ],
        correct: "c",
      },
      {
        id: "p2",
        text: "What is the output of `typeof []` in JavaScript?",
        options: [
          { id: "a", text: "array" },
          { id: "b", text: "object" },
          { id: "c", text: "list" },
          { id: "d", text: "undefined" },
        ],
        correct: "b",
      },
    ],
  },
  {
    id: "prog2",
    category: "Programming",
    title: "TypeScript Quick Hits",
    questions: [
      {
        id: "p3",
        text: "In TS, which operator is used for non-null assertion?",
        options: [
          { id: "a", text: "!" },
          { id: "b", text: "?" },
          { id: "c", text: "::" },
          { id: "d", text: "~" },
        ],
        correct: "a",
      },
      {
        id: "p4",
        text: "Which TS feature lets you combine types?",
        options: [
          { id: "a", text: "Union Types" },
          { id: "b", text: "Generics" },
          { id: "c", text: "Tuples" },
          { id: "d", text: "Enums" },
        ],
        correct: "a",
      },
    ],
  },
];
