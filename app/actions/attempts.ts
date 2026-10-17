"use server";

import { createClient } from "@/lib/supabase/server";
import { getUser } from "@/lib/dal";

export interface Attempt {
  id: string;
  sentenceId: string;
  correctCount: number;
  totalCount: number;
  createdAt: string;
}

/** No-ops when signed out — practice works without an account, saving history is a bonus. */
export async function recordAttempt(
  sentenceId: string,
  correctCount: number,
  totalCount: number
) {
  const user = await getUser();
  if (!user) return;

  const supabase = await createClient();
  await supabase.from("attempts").insert({
    user_id: user.id,
    sentence_id: sentenceId,
    correct_count: correctCount,
    total_count: totalCount,
  });
}

export async function getAttempts(): Promise<Attempt[]> {
  const user = await getUser();
  if (!user) return [];

  const supabase = await createClient();
  const { data } = await supabase
    .from("attempts")
    .select("id, sentence_id, correct_count, total_count, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (data ?? []).map((row) => ({
    id: row.id,
    sentenceId: row.sentence_id,
    correctCount: row.correct_count,
    totalCount: row.total_count,
    createdAt: row.created_at,
  }));
}
