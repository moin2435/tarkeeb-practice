"use client";

import { useEffect, useState } from "react";
import { SENTENCES, type Sentence } from "@/lib/tarkeeb/sentences";
import type { RoleId } from "@/lib/tarkeeb/roles";
import { gradeAttempt, type GradeResult } from "@/lib/tarkeeb/grading";
import { recordAttempt } from "@/app/actions/attempts";
import AyahReference from "./AyahReference";
import SentenceDisplay from "./SentenceDisplay";
import RolePicker from "./RolePicker";
import ScoreBanner from "./ScoreBanner";

function pickSentence(excludeId?: string): Sentence {
  const candidates = excludeId
    ? SENTENCES.filter((sentence) => sentence.id !== excludeId)
    : SENTENCES;
  const pool = candidates.length > 0 ? candidates : SENTENCES;
  return pool[Math.floor(Math.random() * pool.length)];
}

export default function PracticeSession() {
  const [sentence, setSentence] = useState<Sentence | null>(null);
  const [studentRoles, setStudentRoles] = useState<
    Partial<Record<number, RoleId>>
  >({});
  const [activeWordIndex, setActiveWordIndex] = useState<number | null>(null);
  const [result, setResult] = useState<GradeResult | null>(null);

  useEffect(() => {
    // Random pick must happen client-side only (SSR would bake in a
    // different random sentence than the client re-render, causing a
    // hydration mismatch).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSentence(pickSentence());
  }, []);

  if (!sentence) {
    return (
      <div className="h-40 flex items-center justify-center text-zinc-400">
        Loading...
      </div>
    );
  }

  const allTagged = sentence.words.every(
    (_, index) => studentRoles[index] !== undefined
  );

  function handleWordClick(index: number) {
    if (result) return;
    setActiveWordIndex(index);
  }

  function handleRoleSelect(role: RoleId) {
    if (activeWordIndex === null || !sentence) return;

    const nextRoles = { ...studentRoles, [activeWordIndex]: role };
    setStudentRoles(nextRoles);

    const nextUntagged = sentence.words.findIndex(
      (_, index) => nextRoles[index] === undefined
    );
    setActiveWordIndex(nextUntagged === -1 ? null : nextUntagged);
  }

  function handleCheck() {
    if (!sentence) return;
    const graded = gradeAttempt(sentence, studentRoles);
    setResult(graded);
    setActiveWordIndex(null);
    void recordAttempt(sentence.id, graded.correctCount, graded.total);
  }

  function handleNext() {
    setSentence(pickSentence(sentence?.id));
    setStudentRoles({});
    setActiveWordIndex(null);
    setResult(null);
  }

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
        <span>
          Surah{" "}
          <span dir="rtl" className="font-arabic">
            {sentence.surah}
          </span>{" "}
          • Ayah {sentence.ayahNumber}
        </span>
        <span>
          {sentence.difficulty === "beginner" ? "Beginner" : "Intermediate"}
        </span>
      </div>

      <AyahReference sentence={sentence} />

      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6">
        <SentenceDisplay
          sentence={sentence}
          studentRoles={studentRoles}
          activeWordIndex={activeWordIndex}
          results={result?.perWord ?? null}
          onWordClick={handleWordClick}
        />

        {activeWordIndex !== null && !result && (
          <RolePicker
            wordText={sentence.words[activeWordIndex].text}
            onSelect={handleRoleSelect}
            onClose={() => setActiveWordIndex(null)}
          />
        )}
      </div>

      {result && (
        <ScoreBanner result={result} note={sentence.note} noteEn={sentence.noteEn} />
      )}

      <div className="flex justify-center gap-3">
        {!result ? (
          <button
            type="button"
            onClick={handleCheck}
            disabled={!allTagged}
            className="rounded-lg bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black px-6 py-2 font-medium hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Check Answer
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className="rounded-lg bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black px-6 py-2 font-medium hover:opacity-90"
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}
