-- Run this in the Supabase Dashboard's SQL Editor for your project.

create table if not exists public.attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  sentence_id text not null,
  correct_count integer not null,
  total_count integer not null,
  created_at timestamptz not null default now()
);

create index if not exists attempts_user_id_idx on public.attempts (user_id);

alter table public.attempts enable row level security;

create policy "select own attempts"
  on public.attempts for select
  using (auth.uid() = user_id);

create policy "insert own attempts"
  on public.attempts for insert
  with check (auth.uid() = user_id);
