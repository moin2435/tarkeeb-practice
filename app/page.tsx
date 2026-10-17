import Link from "next/link";
import { getUser } from "@/lib/dal";
import { signInWithGoogle, signOut } from "@/app/actions/auth";
import PracticeSession from "@/app/components/PracticeSession";

export default async function Home() {
  const user = await getUser();

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 dark:bg-black min-h-screen px-4 py-6 gap-8">
      <div className="w-full max-w-2xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
          I&apos;rab al-Qur&apos;an Practice
        </h1>
        {user ? (
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/progress"
              className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              My Progress
            </Link>
            <span className="text-zinc-500 dark:text-zinc-400">
              {user.email}
            </span>
            <form action={signOut}>
              <button
                type="submit"
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50"
              >
                Sign Out
              </button>
            </form>
          </div>
        ) : (
          <form action={signInWithGoogle}>
            <button
              type="submit"
              className="rounded-lg bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black px-4 py-1.5 text-sm font-medium hover:opacity-90"
            >
              Sign in with Google
            </button>
          </form>
        )}
      </div>

      <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center max-w-2xl">
        Click each word (or part of one — attached letters like و and ل
        appear as separate pieces), choose its grammatical role, then press
        &quot;Check Answer&quot; to see your result.
      </p>

      <PracticeSession />
    </div>
  );
}
