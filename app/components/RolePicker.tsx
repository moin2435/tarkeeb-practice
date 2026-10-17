"use client";

import { ROLES, ROLE_CATEGORIES, type RoleId } from "@/lib/tarkeeb/roles";

interface Props {
  wordText: string;
  onSelect: (role: RoleId) => void;
  onClose: () => void;
}

export default function RolePicker({ wordText, onSelect, onClose }: Props) {
  return (
    <div className="mt-4 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-zinc-600 dark:text-zinc-400">
          Choose a role for:{" "}
          <span
            dir="rtl"
            className="font-arabic text-lg text-zinc-950 dark:text-zinc-50"
          >
            {wordText}
          </span>
        </span>
        <button
          type="button"
          onClick={onClose}
          className="text-xs text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
        >
          Close
        </button>
      </div>
      <div dir="rtl" className="flex flex-col gap-3">
        {ROLE_CATEGORIES.map((category) => {
          const categoryRoles = ROLES.filter(
            (role) => role.category === category.id
          );
          if (categoryRoles.length === 0) return null;

          return (
            <div key={category.id}>
              <p className="flex items-baseline gap-2 mb-2">
                <span className="font-arabic text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  {category.label}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {category.labelEn}
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {categoryRoles.map((role) => (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => onSelect(role.id)}
                    className={`px-3 py-1.5 rounded-full border-2 text-sm font-arabic hover:opacity-80 ${role.color}`}
                    title={role.hint}
                  >
                    {role.label}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
