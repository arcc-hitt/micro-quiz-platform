import { useState } from "react";

interface Option { id: string; text: string; }
interface Props {
  text: string;
  options: Option[];
  correct: string;
  onAnswer: (correct: boolean) => void;
}

export function Question({ text, options, correct, onAnswer }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const submit = () => {
    if (!selected) return;
    const isCorrect = selected === correct;
    setFeedback(isCorrect ? "✅ Correct!" : "❌ Incorrect.");
    onAnswer(isCorrect);
  };

  return (
    <div className="space-y-4">
      <p className="font-semibold">{text}</p>
      <div className="space-y-2">
        {options.map((o) => (
          <label key={o.id} className="flex items-center space-x-2">
            <input
              type="radio"
              name="option"
              value={o.id}
              checked={selected === o.id}
              onChange={() => setSelected(o.id)}
            />
            <span>{o.text}</span>
          </label>
        ))}
      </div>
      <button
        onClick={submit}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        disabled={!selected || feedback !== null}
      >
        Submit
      </button>
      {feedback && <p className="mt-2">{feedback}</p>}
    </div>
  );
}
