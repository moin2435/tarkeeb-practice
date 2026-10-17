"use client";

import type { Sentence } from "@/lib/tarkeeb/sentences";
import type { RoleId } from "@/lib/tarkeeb/roles";
import { ROLE_BY_ID } from "@/lib/tarkeeb/roles";
import type { WordResult } from "@/lib/tarkeeb/grading";

interface Props {
  sentence: Sentence;
  studentRoles: Partial<Record<number, RoleId>>;
  activeWordIndex: number | null;
  results: WordResult[] | null;
  onWordClick: (index: number) => void;
}

export default function SentenceDisplay({
  sentence,
  studentRoles,
  activeWordIndex,
  results,
  onWordClick,
}: Props) {
  return (
    <div dir="rtl" className="flex flex-wrap justify-center">
      {sentence.words.map((word, index) => {
        const assignedRole = studentRoles[index];
        const roleInfo = assignedRole ? ROLE_BY_ID[assignedRole] : null;
        const result = results?.[index] ?? null;
        // Fuse this chip against the next one (no gap) when the next word
        // is an attached morpheme split off from the same written word.
        const nextIsJoined = sentence.words[index + 1]?.joined === true;

        let chipClasses =
          "px-3 py-2 rounded-lg border-2 transition-colors text-center min-w-[4rem] mb-3";
        chipClasses += nextIsJoined ? "" : " ml-3";

        if (result) {
          chipClasses += result.isCorrect
            ? " border-green-500 bg-green-50 dark:bg-green-900/30"
            : " border-red-500 bg-red-50 dark:bg-red-900/30";
        } else if (activeWordIndex === index) {
          chipClasses +=
            " border-zinc-900 bg-zinc-100 dark:border-zinc-100 dark:bg-zinc-800";
        } else if (roleInfo) {
          chipClasses += ` ${roleInfo.color}`;
        } else {
          chipClasses +=
            " border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900 hover:border-zinc-500 dark:hover:border-zinc-400";
        }

        if (!results) {
          chipClasses += " cursor-pointer";
        }

        return (
          <button
            key={index}
            type="button"
            onClick={() => onWordClick(index)}
            disabled={!!results}
            className={chipClasses}
          >
            <span className="block font-arabic text-3xl leading-relaxed">
              {word.text}
            </span>
            {roleInfo && !result && (
              <span className="block text-xs mt-1 text-zinc-600 dark:text-zinc-300">
                {roleInfo.label}
              </span>
            )}
            {result && (
              <span className="block text-xs mt-1">
                {result.isCorrect ? (
                  <span className="text-green-700 dark:text-green-300">
                    {ROLE_BY_ID[result.correctRole].label}
                  </span>
                ) : (
                  <span className="text-red-700 dark:text-red-300">
                    {result.studentRole
                      ? ROLE_BY_ID[result.studentRole].label
                      : "بلا إجابة"}
                    {" ← "}
                    {ROLE_BY_ID[result.correctRole].label}
                  </span>
                )}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
