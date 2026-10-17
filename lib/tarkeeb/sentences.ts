import type { RoleId } from "./roles";

export interface TarkeebWord {
  text: string;
  role: RoleId;
  irab?: string;
  /** English translation of `irab`, shown alongside it after checking. */
  irabEn?: string;
  /**
   * true if this chip has no space before it and visually fuses with the
   * previous chip — used to split an attached morpheme (a prefixed particle
   * like و/ف/ب/ل/ك, or a suffixed pronoun like ـه/ـك/ـنا) off from its host
   * word so each part can carry its own distinct role. A verb's own
   * person/number agreement marking (و الجماعة, etc.) is NOT split this way
   * — only pronouns/particles with a separately teachable grammatical role.
   */
  joined?: boolean;
}

export interface Sentence {
  id: string;
  text: string;
  surah: string;
  ayahNumber: number;
  difficulty: "beginner" | "intermediate";
  words: TarkeebWord[];
  /** Sentence-level commentary (clause-level relationships a single word's irab can't capture), shown after checking. */
  note?: string;
  /** English translation of `note`. */
  noteEn?: string;
}

/**
 * Tarkeeb al-Qur'an: short ayat from three of the shortest surahs
 * (al-Kawthar, al-Ikhlas, al-Asr), word-by-word i'rab checked against
 * standard references. Cross-checked the genuinely contested points
 * (the "هو" in قل هو الله أحد / إن شانئك هو الأبتر, and كفوًا في سورة
 * الإخلاص) against published i'rab rather than relying on recall alone —
 * still worth a knowledgeable second read before treating this as
 * authoritative, since it's scripture and scholars do differ on some of
 * these points (noted inline where a real difference of opinion exists).
 */
export const SENTENCES: Sentence[] = [
  {
    id: "kawthar-1",
    text: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
    surah: "الكوثر",
    ayahNumber: 1,
    difficulty: "intermediate",
    words: [
      { text: "إِنَّ", role: "inna_sisters" },
      {
        text: "نَا",
        role: "inna_subject",
        irab: "ضمير متصل مبني في محل نصب اسم إنّ",
        irabEn: "Attached pronoun, functioning as the accusative subject of inna",
        joined: true,
      },
      {
        text: "أَعْطَيْنَا",
        role: "verb",
        irab:
          "فعل ماض مبني على السكون لاتصاله بضمير رفع متحرك، والفاعل ضمير متصل (نا) مبني في محل رفع فاعل",
        irabEn:
          "Past-tense verb, built on sukūn because it's attached to a moving subject pronoun; the subject is the attached pronoun (nā), nominative",
      },
      {
        text: "كَ",
        role: "object",
        irab: "ضمير متصل مبني في محل نصب مفعول به أول",
        irabEn: "Attached pronoun, functioning as the first direct object (accusative)",
        joined: true,
      },
      {
        text: "الْكَوْثَرَ",
        role: "object",
        irab: "مفعول به ثانٍ منصوب وعلامة نصبه الفتحة",
        irabEn: "Second direct object, accusative, marked by fatḥah",
      },
    ],
    note: "الجملة الفعلية (أعطيناك الكوثر) في محل رفع خبر إنّ",
    noteEn:
      "The verbal clause (‘aṭāynāka l-kawthar’) stands in the nominative as the predicate of inna",
  },
  {
    id: "kawthar-2",
    text: "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
    surah: "الكوثر",
    ayahNumber: 2,
    difficulty: "intermediate",
    words: [
      {
        text: "فَ",
        role: "conjunction",
        irab: "الفاء الفصيحة، وقيل رابطة لجواب شرط مقدر",
        irabEn:
          "The ‘explanatory fāʾ’ — some grammarians read it as linking to an implied conditional response",
      },
      {
        text: "صَلِّ",
        role: "verb",
        irab: "فعل أمر مبني على حذف حرف العلة، والفاعل ضمير مستتر وجوباً تقديره أنت",
        irabEn:
          "Imperative verb, built by dropping the weak letter; the subject is a hidden pronoun, ‘you’ (implied)",
        joined: true,
      },
      {
        text: "لِ",
        role: "preposition",
        irab: "حرف جر",
        irabEn: "Preposition",
      },
      {
        text: "رَبِّ",
        role: "prep_object",
        irab: "اسم مجرور وعلامة جره الكسرة، وهو مضاف",
        irabEn:
          "Noun in the genitive, marked by kasrah; first term of a construct (iḍāfah) phrase",
        joined: true,
      },
      {
        text: "كَ",
        role: "genitive_complement",
        irab: "ضمير متصل مبني في محل جر مضاف إليه",
        irabEn: "Attached pronoun, functioning as the genitive complement (second term of the construct)",
        joined: true,
      },
      {
        text: "وَ",
        role: "conjunction",
        irab: "حرف عطف",
        irabEn: "Conjunction",
      },
      {
        text: "انْحَرْ",
        role: "verb",
        irab: "فعل أمر مبني على السكون، والفاعل ضمير مستتر وجوباً تقديره أنت",
        irabEn: "Imperative verb, built on sukūn; the subject is a hidden pronoun, ‘you’ (implied)",
        joined: true,
      },
    ],
  },
  {
    id: "kawthar-3",
    text: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
    surah: "الكوثر",
    ayahNumber: 3,
    difficulty: "intermediate",
    words: [
      { text: "إِنَّ", role: "inna_sisters" },
      {
        text: "شَانِئَ",
        role: "inna_subject",
        irab: "اسم إنّ منصوب وعلامة نصبه الفتحة، وهو مضاف",
        irabEn:
          "Subject of inna, accusative, marked by fatḥah; first term of a construct (iḍāfah) phrase",
      },
      {
        text: "كَ",
        role: "genitive_complement",
        irab: "ضمير متصل مبني في محل جر مضاف إليه",
        irabEn: "Attached pronoun, functioning as the genitive complement",
        joined: true,
      },
      {
        text: "هُوَ",
        role: "separating_pronoun",
        irab:
          "ضمير فصل مبني لا محل له من الإعراب (وبعض النحاة يجعله مبتدأ ثانياً)",
        irabEn:
          "Pronoun of separation, with no grammatical position (some grammarians instead read it as a second subject/topic)",
      },
      {
        text: "الْأَبْتَرُ",
        role: "inna_predicate",
        irab: "خبر إنّ مرفوع وعلامة رفعه الضمة",
        irabEn: "Predicate of inna, nominative, marked by ḍammah",
      },
    ],
  },
  {
    id: "ikhlas-1",
    text: "قُلْ هُوَ اللَّهُ أَحَدٌ",
    surah: "الإخلاص",
    ayahNumber: 1,
    difficulty: "intermediate",
    words: [
      {
        text: "قُلْ",
        role: "verb",
        irab:
          "فعل أمر مبني على السكون، والفاعل ضمير مستتر وجوباً تقديره أنت، والجملة ابتدائية لا محل لها من الإعراب",
        irabEn:
          "Imperative verb, built on sukūn; the subject is a hidden pronoun, ‘you’ (implied); this clause opens the sentence and has no grammatical position",
      },
      {
        text: "هُوَ",
        role: "topic",
        irab: "ضمير منفصل مبني في محل رفع مبتدأ أول (ضمير الشأن، وهو الأرجح)",
        irabEn:
          "Independent pronoun, functioning as the first subject/topic (most likely the ‘pronoun of the situation’, referring ahead to the clause that follows)",
      },
      {
        text: "اللَّهُ",
        role: "topic",
        irab: "لفظ الجلالة مبتدأ ثانٍ مرفوع وعلامة رفعه الضمة",
        irabEn:
          "The divine name ‘Allah’, second subject/topic, nominative, marked by ḍammah",
      },
      {
        text: "أَحَدٌ",
        role: "predicate",
        irab:
          "خبر المبتدأ الثاني مرفوع، والجملة الاسمية (الله أحد) في محل رفع خبر المبتدأ الأول",
        irabEn:
          "Predicate of the second subject, nominative; the whole nominal clause (‘Allah is One’) then stands in the nominative as the predicate of the first subject (huwa)",
      },
    ],
    note: "الجملة (هو الله أحد) في محل نصب مقول القول لفعل الأمر (قُلْ)",
    noteEn:
      "The clause (‘He is Allah, One’) stands in the accusative as the reported speech/object of the imperative verb (qul, ‘Say’)",
  },
  {
    id: "ikhlas-2",
    text: "اللَّهُ الصَّمَدُ",
    surah: "الإخلاص",
    ayahNumber: 2,
    difficulty: "beginner",
    words: [
      { text: "اللَّهُ", role: "topic" },
      { text: "الصَّمَدُ", role: "predicate" },
    ],
  },
  {
    id: "ikhlas-3",
    text: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
    surah: "الإخلاص",
    ayahNumber: 3,
    difficulty: "intermediate",
    words: [
      { text: "لَمْ", role: "negation" },
      {
        text: "يَلِدْ",
        role: "verb",
        irab: "فعل مضارع مجزوم بـ(لم) وعلامة جزمه السكون، والفاعل ضمير مستتر تقديره هو",
        irabEn:
          "Present-tense verb, jussive after lam, marked by sukūn; the subject is a hidden pronoun, ‘he’ (implied)",
      },
      { text: "وَ", role: "conjunction" },
      { text: "لَمْ", role: "negation", joined: true },
      {
        text: "يُولَدْ",
        role: "verb",
        irab:
          "فعل مضارع مبني للمجهول مجزوم بـ(لم) وعلامة جزمه السكون، ونائب الفاعل ضمير مستتر تقديره هو",
        irabEn:
          "Present-tense passive verb, jussive after lam, marked by sukūn; the ‘deputy subject’ is a hidden pronoun, ‘he’ (implied)",
      },
    ],
  },
  {
    id: "ikhlas-4",
    text: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
    surah: "الإخلاص",
    ayahNumber: 4,
    difficulty: "intermediate",
    words: [
      { text: "وَ", role: "conjunction" },
      { text: "لَمْ", role: "negation", joined: true },
      {
        text: "يَكُن",
        role: "kana_sisters",
        irab: "فعل مضارع ناقص مجزوم بـ(لم) وعلامة جزمه السكون",
        irabEn: "Defective present-tense verb (from kāna's family), jussive after lam, marked by sukūn",
      },
      {
        text: "لَ",
        role: "preposition",
        irab: "حرف جر، والجار والمجرور متعلقان بـ(كفوًا)",
        irabEn: "Preposition; the prepositional phrase modifies kufuwan (‘equal’)",
      },
      {
        text: "هُ",
        role: "prep_object",
        irab: "ضمير متصل مبني في محل جر",
        irabEn: "Attached pronoun, in the genitive",
        joined: true,
      },
      {
        text: "كُفُوًا",
        role: "kana_predicate",
        irab:
          "خبر (يكن) منصوب وعلامة نصبه الفتحة، قُدِّم على اسم (يكن) لمراعاة فواصل الآيات",
        irabEn:
          "Predicate of yakun, accusative, marked by fatḥah — fronted before its subject to preserve the verse's rhyme",
      },
      {
        text: "أَحَدٌ",
        role: "kana_subject",
        irab: "اسم (يكن) مرفوع مؤخر وعلامة رفعه الضمة",
        irabEn: "Subject of yakun, nominative, marked by ḍammah — placed after its predicate",
      },
    ],
    note: "الأصل: ولم يكن أحدٌ كفوًا له — قُدِّم الخبر (كفوًا) على الاسم (أحد) لمناسبة رؤوس الآي",
    noteEn:
      "Underlying order: ‘wa lam yakun aḩadun kufuwan lahu’ — the predicate (kufuwan) was fronted before the subject (aḩad) to match the verse endings",
  },
  {
    id: "asr-1",
    text: "وَالْعَصْرِ",
    surah: "العصر",
    ayahNumber: 1,
    difficulty: "intermediate",
    words: [
      {
        text: "وَ",
        role: "preposition",
        irab: "واو القسم، وهي حرف جر نائبة عن الباء",
        irabEn: "The wāw of oath — a preposition standing in for bāʾ (‘by’)",
      },
      {
        text: "الْعَصْرِ",
        role: "prep_object",
        irab: "مقسم به، مجرور بواو القسم وعلامة جره الكسرة",
        irabEn: "The object sworn by, in the genitive after the wāw of oath, marked by kasrah",
        joined: true,
      },
    ],
  },
  {
    id: "asr-2",
    text: "إِنَّ الْإِنسَانَ لَفِي خُسْرٍ",
    surah: "العصر",
    ayahNumber: 2,
    difficulty: "intermediate",
    words: [
      { text: "إِنَّ", role: "inna_sisters" },
      {
        text: "الْإِنسَانَ",
        role: "inna_subject",
        irab: "اسم إنّ منصوب وعلامة نصبه الفتحة",
        irabEn: "Subject of inna, accusative, marked by fatḥah",
      },
      {
        text: "لَ",
        role: "tawkid_particle",
        irab: "اللام المزحلقة (لام الابتداء)، حرف توكيد لا محل له من الإعراب",
        irabEn:
          "The ‘shifted lām’ (lām of inception) — an emphasis particle with no grammatical position",
      },
      { text: "فِي", role: "preposition", joined: true },
      {
        text: "خُسْرٍ",
        role: "prep_object",
        irab:
          "اسم مجرور وعلامة جره الكسرة، والجار والمجرور متعلقان بخبر إنّ المحذوف",
        irabEn:
          "Noun in the genitive, marked by kasrah; the prepositional phrase relates to an omitted predicate of inna",
      },
    ],
  },
  {
    id: "asr-3",
    text: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
    surah: "العصر",
    ayahNumber: 3,
    difficulty: "intermediate",
    words: [
      {
        text: "إِلَّا",
        role: "exception_particle",
        irab: "أداة استثناء",
        irabEn: "Exception particle",
      },
      {
        text: "الَّذِينَ",
        role: "exception_noun",
        irab: "اسم موصول مبني في محل نصب على الاستثناء من (الإنسان)",
        irabEn:
          "Relative pronoun, functioning as the excepted noun (accusative), excepting from ‘al-insān’ (‘man’) in the previous verse",
      },
      {
        text: "آمَنُوا",
        role: "verb",
        irab:
          "فعل ماض مبني على الضم لاتصاله بواو الجماعة، والواو ضمير متصل في محل رفع فاعل، والجملة صلة الموصول لا محل لها من الإعراب",
        irabEn:
          "Past-tense verb, built on ḍammah because it's attached to the ‘wāw of the group’; that wāw is the subject (nominative); this clause is the relative clause and has no grammatical position of its own",
      },
      { text: "وَ", role: "conjunction" },
      {
        text: "عَمِلُوا",
        role: "verb",
        irab: "فعل ماض والواو فاعل، معطوفة على (آمنوا)",
        irabEn: "Past-tense verb with wāw as its subject, conjoined to āmanū (‘they believed’)",
        joined: true,
      },
      {
        text: "الصَّالِحَاتِ",
        role: "object",
        irab: "مفعول به منصوب وعلامة نصبه الكسرة لأنه جمع مؤنث سالم",
        irabEn:
          "Direct object, accusative, marked by kasrah (instead of fatḥah) because it's a sound feminine plural",
      },
      { text: "وَ", role: "conjunction" },
      {
        text: "تَوَاصَوْا",
        role: "verb",
        irab: "فعل ماض والواو فاعل، معطوفة على ما قبلها",
        irabEn: "Past-tense verb with wāw as its subject, conjoined to what precedes it",
        joined: true,
      },
      { text: "بِ", role: "preposition" },
      { text: "الْحَقِّ", role: "prep_object", joined: true },
      { text: "وَ", role: "conjunction" },
      {
        text: "تَوَاصَوْا",
        role: "verb",
        irab: "فعل ماض والواو فاعل، معطوفة على ما قبلها",
        irabEn: "Past-tense verb with wāw as its subject, conjoined to what precedes it",
        joined: true,
      },
      { text: "بِ", role: "preposition" },
      { text: "الصَّبْرِ", role: "prep_object", joined: true },
    ],
    note: "الاستثناء (إلا الذين...) من (الإنسان) في الآية السابقة: أي لفي خسر إلا الذين آمنوا...",
    noteEn:
      "The exception (‘except those who...’) excepts from ‘man’ in the previous verse — i.e. ‘surely man is in loss, except those who believed...’",
  },
];

/** Surah names in order of first appearance in SENTENCES — add a surah's first ayah anywhere above and it appears here automatically. */
export const SURAHS: string[] = Array.from(new Set(SENTENCES.map((s) => s.surah)));

/** A surah's ayat, sorted ascending by ayahNumber (for sequential surah-mode practice). */
export function getSurahAyat(surah: string): Sentence[] {
  return SENTENCES.filter((s) => s.surah === surah).sort(
    (a, b) => a.ayahNumber - b.ayahNumber
  );
}
