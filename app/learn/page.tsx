import Link from "next/link";
import { ROLES, ROLE_CATEGORIES, type Role } from "@/lib/tarkeeb/roles";
import { ROLE_EXAMPLES } from "@/lib/tarkeeb/roleExamples";

function HighlightedExample({ role }: { role: Role }) {
  const example = ROLE_EXAMPLES[role.id];
  const parts = example.arabic.split(example.highlight);

  return (
    <div dir="rtl" className="font-arabic text-2xl leading-loose">
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <span className={`px-1.5 py-0.5 rounded-md border-2 ${role.color}`}>
              {example.highlight}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export default function LearnPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 dark:bg-black min-h-screen px-4 py-6 gap-8">
      <div className="w-full max-w-2xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
          Learn the Roles
        </h1>
        <Link
          href="/"
          className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          Back to Practice
        </Link>
      </div>

      <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center max-w-2xl">
        All 22 grammatical roles used in the practice exercises, each with a
        short illustrative example (not from the Qur&apos;an — these are
        simple teaching sentences, kept separate from the ayat you practice
        on).
      </p>

      <div className="w-full max-w-2xl mx-auto flex flex-col gap-10">
        {ROLE_CATEGORIES.map((category) => {
          const categoryRoles = ROLES.filter(
            (role) => role.category === category.id
          );
          if (categoryRoles.length === 0) return null;

          return (
            <section key={category.id} className="flex flex-col gap-4">
              <h2 className="flex items-baseline gap-2 border-b border-zinc-200 dark:border-zinc-700 pb-2">
                <span className="font-arabic text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                  {category.label}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {category.labelEn}
                </span>
              </h2>

              <div className="flex flex-col gap-5">
                {categoryRoles.map((role) => {
                  const example = ROLE_EXAMPLES[role.id];
                  return (
                    <div
                      key={role.id}
                      className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-5 flex flex-col gap-3"
                    >
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`font-arabic text-lg px-2 py-0.5 rounded-md border-2 ${role.color}`}
                        >
                          {role.label}
                        </span>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          {role.hint}
                        </span>
                      </div>

                      <p className="text-sm text-zinc-700 dark:text-zinc-300">
                        {example.explanation}
                      </p>

                      <div className="rounded-xl bg-zinc-50 dark:bg-zinc-800/60 p-4 flex flex-col gap-1.5">
                        <HighlightedExample role={role} />
                        <p
                          dir="ltr"
                          className="text-xs text-zinc-500 dark:text-zinc-400"
                        >
                          {example.englishSentence}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
