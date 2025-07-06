import { useEffect, useState } from "react";

interface Option { id: string; text: string; }
interface Props {
    text: string;
    options: Option[];
    onSubmit: (selected: string) => void;
  selectedAnswer: string | null;
  disabled: boolean;
}

export function Question({
  text,
  options,
  onSubmit,
  selectedAnswer,
  disabled,
}: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  // initialize/restore selection when parent index changes
  useEffect(() => {
    setSelected(selectedAnswer);
  }, [selectedAnswer]);

  return (
    <div className="space-y-4">
      <p className="font-semibold text-base sm:text-lg">{text}</p>
      <div className="space-y-2">
        {options.map((o) => (
          <label key={o.id} className="flex items-center space-x-2 text-sm sm:text-base">
            <input
              type="radio"
              name="option"
              value={o.id}
              className="h-4 w-4 sm:h-5 sm:w-5"
              checked={selected === o.id}
              onChange={() => !disabled && setSelected(o.id)}
              disabled={disabled}
            />
            <span>{o.text}</span>
          </label>
        ))}
      </div>
      <button
        onClick={() => selected && onSubmit(selected)}
        className="px-3 py-1 sm:px-4 sm:py-2 w-full sm:w-auto bg-blue-600 text-white rounded disabled:opacity-50 cursor-pointer"
        disabled={!selected || disabled}
      >
        Submit
      </button>
    </div>
  );
}
