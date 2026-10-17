import type { RoleId } from "./roles";

export interface RoleExample {
  /** Short illustrative sentence/phrase, full tashkeel. Hand-written for teaching — not from the Qur'an, kept separate from the practice content in sentences.ts. */
  arabic: string;
  /** Exact substring of `arabic` that plays this role (may be just a prefix letter). */
  highlight: string;
  /** English translation of the full example sentence. */
  englishSentence: string;
  /** What the role means, and why the highlighted word has it here. */
  explanation: string;
}

export const ROLE_EXAMPLES: Record<RoleId, RoleExample> = {
  verb: {
    arabic: "كَتَبَ الطَّالِبُ الدَّرْسَ",
    highlight: "كَتَبَ",
    englishSentence: "The student wrote the lesson.",
    explanation:
      "The فعل is the verb — the action word of the sentence. كَتَبَ (‘wrote’) is a past-tense verb, built (مبني) on a fixed form rather than taking a case ending.",
  },
  subject: {
    arabic: "كَتَبَ الطَّالِبُ الدَّرْسَ",
    highlight: "الطَّالِبُ",
    englishSentence: "The student wrote the lesson.",
    explanation:
      "The فاعل is the doer of the verb's action, always nominative (مرفوع). الطَّالِبُ (‘the student’) is who did the writing, so it takes the nominative ḍammah.",
  },
  object: {
    arabic: "كَتَبَ الطَّالِبُ الدَّرْسَ",
    highlight: "الدَّرْسَ",
    englishSentence: "The student wrote the lesson.",
    explanation:
      "The مفعول به is the direct object — what receives the verb's action — and is accusative (منصوب). الدَّرْسَ (‘the lesson’) is what was written, marked with fatḥah.",
  },
  topic: {
    arabic: "الْكِتَابُ جَدِيدٌ",
    highlight: "الْكِتَابُ",
    englishSentence: "The book is new.",
    explanation:
      "The مبتدأ is the subject of a nominal sentence — one that opens with a noun instead of a verb — and is nominative. الْكِتَابُ (‘the book’) is what the sentence is about.",
  },
  predicate: {
    arabic: "الْكِتَابُ جَدِيدٌ",
    highlight: "جَدِيدٌ",
    englishSentence: "The book is new.",
    explanation:
      "The خبر completes a nominal sentence by saying something about the مبتدأ, and is also nominative. جَدِيدٌ (‘new’) tells us about الكتاب.",
  },
  preposition: {
    arabic: "ذَهَبَ الْوَلَدُ إِلَى الْمَدْرَسَةِ",
    highlight: "إِلَى",
    englishSentence: "The boy went to school.",
    explanation:
      "A حرف جر governs the noun that follows it, putting that noun in the genitive case. إِلَى (‘to’) is a preposition — a particle, so it has no case ending of its own.",
  },
  prep_object: {
    arabic: "ذَهَبَ الْوَلَدُ إِلَى الْمَدْرَسَةِ",
    highlight: "الْمَدْرَسَةِ",
    englishSentence: "The boy went to school.",
    explanation:
      "The اسم مجرور is the noun governed by a preposition, genitive (مجرور). الْمَدْرَسَةِ (‘the school’) follows إِلَى, so it takes the genitive kasrah.",
  },
  adjective: {
    arabic: "جَاءَ الطَّالِبُ الْجَدِيدُ",
    highlight: "الْجَدِيدُ",
    englishSentence: "The new student came.",
    explanation:
      "The نعت is an adjective describing the noun before it, agreeing with it in case, number, gender, and definiteness. الْجَدِيدُ (‘the new’) describes الطالب, so it's also nominative like it.",
  },
  conjunction: {
    arabic: "جَاءَ أَحْمَدُ وَخَالِدٌ",
    highlight: "وَ",
    englishSentence: "Ahmad and Khalid came.",
    explanation:
      "A حرف عطف joins two words or clauses together. The وَ (‘and’) prefixed to خَالِدٌ links it to أَحْمَدُ — both share the same role (فاعل) in the sentence.",
  },
  adverb: {
    arabic: "يَلْعَبُ الْأَطْفَالُ صَبَاحًا",
    highlight: "صَبَاحًا",
    englishSentence: "The children play in the morning.",
    explanation:
      "The ظرف is an adverb of time or place, accusative. صَبَاحًا (‘in the morning’) tells us when the playing happens.",
  },
  genitive_complement: {
    arabic: "كِتَابُ الطَّالِبِ جَدِيدٌ",
    highlight: "الطَّالِبِ",
    englishSentence: "The student's book is new.",
    explanation:
      "The مضاف إليه is the second noun in a possessive (إضافة) construction, always genitive. الطَّالِبِ (‘of the student’) tells us whose book it is — note the first noun, كِتَابُ, drops its tanween because it's مضاف.",
  },
  negation: {
    arabic: "لَمْ يَكْتُبْ الْوَلَدُ الدَّرْسَ",
    highlight: "لَمْ",
    englishSentence: "The boy did not write the lesson.",
    explanation:
      "A حرف نفي negates the verb. لَمْ (‘did not’) negates a past-meaning action and puts the following present-tense verb in the jussive mood (مجزوم).",
  },
  inna_sisters: {
    arabic: "إِنَّ الْعِلْمَ نُورٌ",
    highlight: "إِنَّ",
    englishSentence: "Indeed, knowledge is light.",
    explanation:
      "إنّ وأخواتها are particles placed before a nominal sentence for emphasis; they make their subject accusative while the predicate stays nominative. إِنَّ (‘indeed’) is the most common one.",
  },
  inna_subject: {
    arabic: "إِنَّ الْعِلْمَ نُورٌ",
    highlight: "الْعِلْمَ",
    englishSentence: "Indeed, knowledge is light.",
    explanation:
      "The اسم إنّ is the subject of إنّ (or one of her sisters), accusative. الْعِلْمَ (‘knowledge’) takes the fatḥah because إنّ precedes it.",
  },
  inna_predicate: {
    arabic: "إِنَّ الْعِلْمَ نُورٌ",
    highlight: "نُورٌ",
    englishSentence: "Indeed, knowledge is light.",
    explanation:
      "The خبر إنّ is the predicate of إنّ — unlike the subject, it stays nominative. نُورٌ (‘light’) keeps the ḍammah.",
  },
  kana_sisters: {
    arabic: "كَانَ الطَّقْسُ جَمِيلًا",
    highlight: "كَانَ",
    englishSentence: "The weather was beautiful.",
    explanation:
      "كان وأخواتها are verbs that enter a nominal sentence and make the predicate accusative while the subject stays nominative — the reverse of إنّ. كَانَ (‘was’) is the most common one.",
  },
  kana_subject: {
    arabic: "كَانَ الطَّقْسُ جَمِيلًا",
    highlight: "الطَّقْسُ",
    englishSentence: "The weather was beautiful.",
    explanation:
      "The اسم كان is the subject of كان (or one of her sisters) and stays nominative, just like a plain مبتدأ. الطَّقْسُ (‘the weather’) keeps the ḍammah.",
  },
  kana_predicate: {
    arabic: "كَانَ الطَّقْسُ جَمِيلًا",
    highlight: "جَمِيلًا",
    englishSentence: "The weather was beautiful.",
    explanation:
      "The خبر كان is the predicate of كان, and — unlike a plain خبر — it's accusative. جَمِيلًا (‘beautiful’) takes the fatḥah because of كَانَ.",
  },
  tawkid_particle: {
    arabic: "إِنَّ الطَّالِبَ لَمُجْتَهِدٌ",
    highlight: "لَ",
    englishSentence: "Indeed the student is truly hardworking.",
    explanation:
      "A حرف توكيد adds emphasis without taking a grammatical position of its own. The لَ here — called اللام المزحلقة — shifts in front of خبر إنّ to stress it, roughly ‘truly/indeed’.",
  },
  exception_particle: {
    arabic: "حَضَرَ الطُّلَّابُ إِلَّا وَاحِدًا",
    highlight: "إِلَّا",
    englishSentence: "The students attended, except one.",
    explanation:
      "An أداة استثناء introduces an exception to what was just said. إِلَّا (‘except’) is the most common one, and is itself a particle with no case of its own.",
  },
  exception_noun: {
    arabic: "حَضَرَ الطُّلَّابُ إِلَّا وَاحِدًا",
    highlight: "وَاحِدًا",
    englishSentence: "The students attended, except one.",
    explanation:
      "The مستثنى is the noun being excepted, usually accusative when the excepted-from group is stated (as here, الطلاب). وَاحِدًا (‘one’) takes the fatḥah.",
  },
  separating_pronoun: {
    arabic: "مُحَمَّدٌ هُوَ الرَّسُولُ",
    highlight: "هُوَ",
    englishSentence: "Muhammad — he is the Messenger.",
    explanation:
      "A ضمير فصل sits between a مبتدأ and its خبر for emphasis/clarity, especially when both are definite. هُوَ (‘he’) has no grammatical position of its own here — it doesn't change the case of anything around it.",
  },
};
