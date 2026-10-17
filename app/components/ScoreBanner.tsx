"use client";

import type { GradeResult } from "@/lib/tarkeeb/grading";

interface Props {
  result: GradeResult;
  note?: string;
  noteEn?: string;
}

export default function ScoreBanner({ result, note, noteEn }: Props) {
  const { correctCount, total, perWord } = result;
  const allCorrect = correctCount === total;
  const irabNotes = perWord.filter((word) => word.irab);

  return (
    <div
      className={`rounded-xl border-2 p-4 ${
        allCorrect
          ? "border-green-500 bg-green-50 dark:bg-green-900/30"
          : "border-amber-500 bg-amber-50 dark:bg-amber-900/30"
      }`}
    >
      <p className="text-xl font-semibold">
        {correctCount} / {total} correct
      </p>
      {allCorrect ? (
        <p className="mt-1 text-sm text-green-800 dark:text-green-200">
          Well done! All answers are correct.
        </p>
      ) : (
        <p className="mt-1 text-sm text-amber-800 dark:text-amber-200">
          Review the words highlighted in red above — the correct role is
          shown next to each one.
        </p>
      )}
      {irabNotes.length > 0 && (
        <details className="mt-3 text-sm">
          <summary className="cursor-pointer text-zinc-600 dark:text-zinc-400">
            I&apos;rab details (optional)
          </summary>
          <ul className="mt-2 space-y-2 list-disc list-inside">
            {irabNotes.map((word, i) => (
              <li key={i} dir="rtl">
                <span className="font-arabic text-lg">{word.text}</span>:{" "}
                {word.irab}
                {word.irabEn && (
                  <p
                    dir="ltr"
                    className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5"
                  >
                    {word.irabEn}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </details>
      )}
      {note && (
        <div className="mt-3 text-sm border-t border-current/20 pt-3">
          <p dir="rtl" className="text-zinc-600 dark:text-zinc-400">
            {note}
          </p>
          {noteEn && (
            <p dir="ltr" className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              {noteEn}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
