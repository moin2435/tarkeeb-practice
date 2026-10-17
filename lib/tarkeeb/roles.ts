export type RoleId =
  | "verb"
  | "subject"
  | "object"
  | "topic"
  | "predicate"
  | "preposition"
  | "prep_object"
  | "adjective"
  | "conjunction"
  | "adverb"
  | "genitive_complement"
  | "negation"
  | "inna_sisters"
  | "inna_subject"
  | "inna_predicate"
  | "kana_sisters"
  | "kana_subject"
  | "kana_predicate"
  | "tawkid_particle"
  | "exception_particle"
  | "exception_noun"
  | "separating_pronoun";

export type RoleCategory =
  | "verbal_sentence"
  | "nominal_sentence"
  | "governing_particles"
  | "genitive_prepositional"
  | "followers"
  | "exception"
  | "other";

export const ROLE_CATEGORIES: {
  id: RoleCategory;
  label: string;
  labelEn: string;
}[] = [
  { id: "verbal_sentence", label: "الجملة الفعلية", labelEn: "Verbal Sentence" },
  { id: "nominal_sentence", label: "الجملة الاسمية", labelEn: "Nominal Sentence" },
  { id: "governing_particles", label: "النواسخ", labelEn: "Governing Particles" },
  { id: "genitive_prepositional", label: "الجر والإضافة", labelEn: "Prepositions & Genitive" },
  { id: "followers", label: "التوابع", labelEn: "Modifiers" },
  { id: "exception", label: "الاستثناء", labelEn: "Exception" },
  { id: "other", label: "عناصر أخرى", labelEn: "Other" },
];

export interface Role {
  id: RoleId;
  label: string;
  hint: string;
  color: string;
  category: RoleCategory;
}

export const ROLES: Role[] = [
  {
    id: "verb",
    label: "فعل",
    hint: "verb",
    color:
      "border-blue-400 bg-blue-100 text-blue-900 dark:border-blue-600 dark:bg-blue-900/40 dark:text-blue-100",
    category: "verbal_sentence",
  },
  {
    id: "subject",
    label: "فاعل",
    hint: "subject of the verb",
    color:
      "border-emerald-400 bg-emerald-100 text-emerald-900 dark:border-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-100",
    category: "verbal_sentence",
  },
  {
    id: "object",
    label: "مفعول به",
    hint: "object",
    color:
      "border-amber-400 bg-amber-100 text-amber-900 dark:border-amber-600 dark:bg-amber-900/40 dark:text-amber-100",
    category: "verbal_sentence",
  },
  {
    id: "topic",
    label: "مبتدأ",
    hint: "topic of a nominal sentence",
    color:
      "border-purple-400 bg-purple-100 text-purple-900 dark:border-purple-600 dark:bg-purple-900/40 dark:text-purple-100",
    category: "nominal_sentence",
  },
  {
    id: "predicate",
    label: "خبر",
    hint: "predicate of a nominal sentence",
    color:
      "border-pink-400 bg-pink-100 text-pink-900 dark:border-pink-600 dark:bg-pink-900/40 dark:text-pink-100",
    category: "nominal_sentence",
  },
  {
    id: "preposition",
    label: "حرف جر",
    hint: "preposition",
    color:
      "border-slate-400 bg-slate-100 text-slate-900 dark:border-slate-500 dark:bg-slate-800/60 dark:text-slate-100",
    category: "genitive_prepositional",
  },
  {
    id: "prep_object",
    label: "اسم مجرور",
    hint: "noun governed by a preposition",
    color:
      "border-cyan-400 bg-cyan-100 text-cyan-900 dark:border-cyan-600 dark:bg-cyan-900/40 dark:text-cyan-100",
    category: "genitive_prepositional",
  },
  {
    id: "adjective",
    label: "نعت",
    hint: "adjective",
    color:
      "border-rose-400 bg-rose-100 text-rose-900 dark:border-rose-600 dark:bg-rose-900/40 dark:text-rose-100",
    category: "followers",
  },
  {
    id: "conjunction",
    label: "حرف عطف",
    hint: "conjunction",
    color:
      "border-gray-400 bg-gray-100 text-gray-900 dark:border-gray-500 dark:bg-gray-800/60 dark:text-gray-100",
    category: "other",
  },
  {
    id: "adverb",
    label: "ظرف",
    hint: "adverb of time or place",
    color:
      "border-orange-400 bg-orange-100 text-orange-900 dark:border-orange-600 dark:bg-orange-900/40 dark:text-orange-100",
    category: "other",
  },
  {
    id: "genitive_complement",
    label: "مضاف إليه",
    hint: "genitive complement (idafa)",
    color:
      "border-teal-400 bg-teal-100 text-teal-900 dark:border-teal-600 dark:bg-teal-900/40 dark:text-teal-100",
    category: "genitive_prepositional",
  },
  {
    id: "negation",
    label: "حرف نفي",
    hint: "negation particle",
    color:
      "border-red-400 bg-red-100 text-red-900 dark:border-red-600 dark:bg-red-900/40 dark:text-red-100",
    category: "other",
  },
  {
    id: "inna_sisters",
    label: "إنّ وأخواتها",
    hint: "inna and her sisters (emphasis/corroboration particle)",
    color:
      "border-indigo-400 bg-indigo-100 text-indigo-900 dark:border-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-100",
    category: "governing_particles",
  },
  {
    id: "inna_subject",
    label: "اسم إنّ",
    hint: "subject of inna (accusative)",
    color:
      "border-fuchsia-400 bg-fuchsia-100 text-fuchsia-900 dark:border-fuchsia-600 dark:bg-fuchsia-900/40 dark:text-fuchsia-100",
    category: "governing_particles",
  },
  {
    id: "inna_predicate",
    label: "خبر إنّ",
    hint: "predicate of inna",
    color:
      "border-violet-400 bg-violet-100 text-violet-900 dark:border-violet-600 dark:bg-violet-900/40 dark:text-violet-100",
    category: "governing_particles",
  },
  {
    id: "kana_sisters",
    label: "كان وأخواتها",
    hint: "kana and her sisters",
    color:
      "border-lime-400 bg-lime-100 text-lime-900 dark:border-lime-600 dark:bg-lime-900/40 dark:text-lime-100",
    category: "governing_particles",
  },
  {
    id: "kana_subject",
    label: "اسم كان",
    hint: "subject of kana (nominative)",
    color:
      "border-yellow-400 bg-yellow-100 text-yellow-900 dark:border-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-100",
    category: "governing_particles",
  },
  {
    id: "kana_predicate",
    label: "خبر كان",
    hint: "predicate of kana (accusative)",
    color:
      "border-sky-400 bg-sky-100 text-sky-900 dark:border-sky-600 dark:bg-sky-900/40 dark:text-sky-100",
    category: "governing_particles",
  },
  {
    id: "tawkid_particle",
    label: "حرف توكيد",
    hint: "corroboration particle (e.g. the لام preceding a predicate)",
    color:
      "border-stone-400 bg-stone-100 text-stone-900 dark:border-stone-500 dark:bg-stone-800/60 dark:text-stone-100",
    category: "other",
  },
  {
    id: "exception_particle",
    label: "أداة استثناء",
    hint: "exception particle (إلا)",
    color:
      "border-green-400 bg-green-100 text-green-900 dark:border-green-600 dark:bg-green-900/40 dark:text-green-100",
    category: "exception",
  },
  {
    id: "exception_noun",
    label: "مستثنى",
    hint: "the excepted noun after إلا",
    color:
      "border-zinc-400 bg-zinc-100 text-zinc-900 dark:border-zinc-500 dark:bg-zinc-800/60 dark:text-zinc-100",
    category: "exception",
  },
  {
    id: "separating_pronoun",
    label: "ضمير فصل",
    hint: "separating pronoun (no grammatical position of its own)",
    color:
      "border-neutral-400 bg-neutral-100 text-neutral-900 dark:border-neutral-500 dark:bg-neutral-800/60 dark:text-neutral-100",
    category: "other",
  },
];

export const ROLE_BY_ID: Record<RoleId, Role> = Object.fromEntries(
  ROLES.map((role) => [role.id, role])
) as Record<RoleId, Role>;
