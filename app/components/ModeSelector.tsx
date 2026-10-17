"use client";

import { SURAHS } from "@/lib/tarkeeb/sentences";

interface Props {
  mode: "random" | "surah";
  selectedSurah: string | null;
  onSelectRandom: () => void;
  onSelectSurah: (surah: string) => void;
}

export default function ModeSelector({
  mode,
  selectedSurah,
  onSelectRandom,
  onSelectSurah,
}: Props) {
  const activeClasses =
    "border-zinc-950 bg-zinc-950 text-white dark:border-zinc-50 dark:bg-zinc-50 dark:text-black";
  const inactiveClasses =
    "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-400";

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <button
        type="button"
        onClick={onSelectRandom}
        className={`px-3 py-1.5 rounded-full border-2 text-sm font-medium ${
          mode === "random" ? activeClasses : inactiveClasses
        }`}
      >
        Random
      </button>
      {SURAHS.map((surah) => (
        <button
          key={surah}
          type="button"
          dir="rtl"
          onClick={() => onSelectSurah(surah)}
          className={`px-3 py-1.5 rounded-full border-2 text-sm font-arabic ${
            mode === "surah" && selectedSurah === surah
              ? activeClasses
              : inactiveClasses
          }`}
        >
          {surah}
        </button>
      ))}
    </div>
  );
}
