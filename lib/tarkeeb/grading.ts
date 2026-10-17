import type { RoleId } from "./roles";
import type { Sentence } from "./sentences";

export interface WordResult {
  text: string;
  studentRole: RoleId | undefined;
  correctRole: RoleId;
  isCorrect: boolean;
  irab?: string;
  irabEn?: string;
}

export interface GradeResult {
  correctCount: number;
  total: number;
  perWord: WordResult[];
}

export function gradeAttempt(
  sentence: Sentence,
  studentRoles: Partial<Record<number, RoleId>>
): GradeResult {
  const perWord: WordResult[] = sentence.words.map((word, index) => {
    const studentRole = studentRoles[index];
    return {
      text: word.text,
      studentRole,
      correctRole: word.role,
      isCorrect: studentRole === word.role,
      irab: word.irab,
      irabEn: word.irabEn,
    };
  });

  const correctCount = perWord.filter((word) => word.isCorrect).length;

  return { correctCount, total: sentence.words.length, perWord };
}
