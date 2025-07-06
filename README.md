# Micro-Quiz Platform

A simple, modern web app built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS** that lets users take short, topic-based quizzes. Built as part of an assignment to demonstrate core Next.js concepts like dynamic routing, SSG, SSR, and API routes.

---

## ✨ Features

* Browse quiz categories on the homepage (SSG)
* View quizzes for a selected category (SSR)
* Take quizzes one question at a time
* Get instant feedback (correct/incorrect)
* View final score after completing the quiz
* Fully responsive UI
* Loading + error handling on every page
* Unit and Functional Testing with Jest and Cypress

---

## 📁 Tech Stack

* **Next.js 14+ (App Router)**
* **TypeScript**
* **Tailwind CSS**
* **next/image** for optimized images

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/arcc-hitt/micro-quiz-platform.git
cd micro-quiz-platform
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
```

### 3. Run locally

```bash
npm run dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testing

### ✅ Unit Testing

* Framework: **Jest** + **React Testing Library**
* Tests cover:

  * CategoryCard, QuizCard, Question, and QuizPageClient components
  * User interactions: selecting options, submitting, navigating between questions
* Configured with `ts-jest`, `jest-environment-jsdom`, and `@testing-library/*`

To run:

```bash
npm run test
```

### ✅ Functional Testing (End-to-End)

* Framework: **Cypress**
* Tests simulate the full user flow:

  * Navigating to homepage
  * Selecting a category & quiz
  * Taking the quiz and submitting answers
  * Viewing feedback and final score

To run:

```bash
npm run cypress:open
# or headless
npm run cypress:run
```

---


## 💡 Next.js-Specific Implementations

### ✔ Home Page (SSG)

* Implemented as a Server Component with default static caching.
* Category data is fetched from `/api/categories` at build time.
* Used `next/link` for navigation and `metadata` export for SEO.

### ✔ Quiz Category Page (SSR)

* Dynamic route: `/quizzes/[category]`
* Uses `force-dynamic` + `fetch(..., { cache: 'no-store' })` to ensure fresh SSR content.
* Dynamic `<title>` and `<meta>` set via `generateMetadata`.

### ✔ Individual Quiz Page (SSR + Client Logic)

* Page loads full quiz via SSR.
* `QuizPageClient` (Client Component) handles answer selection, navigation, and scoring.
* Immediate feedback shown after submission.

### ✔ API Routes

* `/api/categories` → returns quiz categories
* `/api/quizzes/[category]` → returns quizzes in a category
* `/api/quiz/[id]` → returns full quiz with questions + answers

### ✔ Image Optimization

* All icons and logos use the `next/image` component for better performance and responsiveness.

---

## 🌟 Design Decisions

* **App Router**: To demonstrate latest Next.js features (server/client components, route segments, etc.)
* **Tailwind CSS**: Utility-first CSS for rapid styling + responsive design
* **Mock JSON data**: Simple and self-contained without external DB

---

## ⚠️ Challenges & Solutions

* **Dynamic Route Fetching**: Ensured correct handling of `params` in `generateMetadata` (awaited properly).
* **App Router SSR/SSG parity**: Carefully used `dynamic = "force-dynamic"` for SSR pages.
* **Client-server split**: Separated server-side data loading from interactive client logic.
* **Loading/Error UI**: Implemented `loading.tsx` and `error.tsx` per route for smooth UX.

---

## 🤖 AI Tooling

* **ChatGPT (GPT-4)**: Generating Mock Data, debugging tricky state transitions, and assisted in setting up Jest + Cypress

* **Cursor**: Used for in-editor context-aware code completions.

---

## 📌 Possible Enhancements

* Add timer-based quizzes
* User authentication for personalized results
* Store results in localStorage or DB
* Quiz creation dashboard for admins
* Add Navbar

---