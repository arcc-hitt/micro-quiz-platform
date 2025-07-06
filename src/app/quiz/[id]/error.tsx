"use client";
import { useEffect } from "react";

export default function QuizError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-8 text-center">
      <p className="text-red-600 font-bold">Couldn’t load quiz.</p>
      <pre className="my-4 p-4 bg-gray-100 rounded">{error.message}</pre>
      <button onClick={() => reset()} className="px-4 py-2 bg-blue-600 text-white rounded">
        Retry
      </button>
    </div>
  );
}
