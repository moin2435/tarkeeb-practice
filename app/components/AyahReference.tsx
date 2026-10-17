import type { Sentence } from "@/lib/tarkeeb/sentences";

interface Props {
  sentence: Sentence;
}

export default function AyahReference({ sentence }: Props) {
  return (
    <div className="text-center">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
        Full Ayah
      </p>
      <p
        dir="rtl"
        className="font-arabic text-2xl sm:text-3xl leading-loose text-zinc-800 dark:text-zinc-100"
      >
        {sentence.text}
      </p>
    </div>
  );
}
