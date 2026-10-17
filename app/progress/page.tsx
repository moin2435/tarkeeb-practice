import Link from "next/link";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/dal";
import { getAttempts } from "@/app/actions/attempts";
import ProgressStats from "@/app/components/ProgressStats";

export default async function ProgressPage() {
  const user = await getUser();
  if (!user) {
    redirect("/");
  }

  const attempts = await getAttempts();

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 dark:bg-black min-h-screen px-4 py-6 gap-8">
      <div className="w-full max-w-2xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
          My Progress
        </h1>
        <Link
          href="/"
          className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          Back to Practice
        </Link>
      </div>

      <ProgressStats attempts={attempts} />
    </div>
  );
}
