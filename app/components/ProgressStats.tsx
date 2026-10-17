import type { Attempt } from "@/app/actions/attempts";

interface Props {
  attempts: Attempt[];
}

export default function ProgressStats({ attempts }: Props) {
  if (attempts.length === 0) {
    return (
      <p className="text-zinc-500 dark:text-zinc-400">
        No attempts recorded yet. Go to the practice page and get started!
      </p>
    );
  }

  const totalCorrect = attempts.reduce((sum, a) => sum + a.correctCount, 0);
  const totalWords = attempts.reduce((sum, a) => sum + a.totalCount, 0);
  const accuracy = totalWords > 0 ? Math.round((totalCorrect / totalWords) * 100) : 0;

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-4">
          <p className="text-2xl font-semibold">{attempts.length}</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Attempts</p>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-4">
          <p className="text-2xl font-semibold">
            {totalCorrect}/{totalWords}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Correct Words
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-4">
          <p className="text-2xl font-semibold">{accuracy}%</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Accuracy
          </p>
        </div>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-700">
            <th className="py-2 text-left">Verse</th>
            <th className="py-2 text-left">Score</th>
            <th className="py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {attempts.map((attempt) => (
            <tr
              key={attempt.id}
              className="border-b border-zinc-100 dark:border-zinc-800"
            >
              <td className="py-2 font-mono text-xs">{attempt.sentenceId}</td>
              <td className="py-2">
                {attempt.correctCount}/{attempt.totalCount}
              </td>
              <td className="py-2 text-zinc-500 dark:text-zinc-400">
                {new Date(attempt.createdAt).toLocaleString("en-US")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
