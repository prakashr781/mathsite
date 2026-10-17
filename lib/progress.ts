export interface ProgressRecord {
  score: number;
  total: number;
  seconds: number;
  completedAt: string;
}

const storageKey = (userId?: string) => `mathsite_progress_${userId || "anon"}`;

export function getProgress(userId?: string): Record<string, ProgressRecord> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(storageKey(userId)) || "{}");
  } catch {
    return {};
  }
}

export function markSubsectionComplete(
  subsectionId: string,
  score: number,
  total: number,
  seconds: number,
  userId?: string
) {
  if (typeof window === "undefined") return;
  const progress = getProgress(userId);
  const existing = progress[subsectionId];
  progress[subsectionId] = {
    score: Math.max(score, existing?.score ?? 0),
    total,
    seconds: (existing?.seconds ?? 0) + seconds,
    completedAt: new Date().toISOString(),
  };
  localStorage.setItem(storageKey(userId), JSON.stringify(progress));
}

export function getProgressSummary(progress: Record<string, ProgressRecord>) {
  const entries = Object.values(progress);
  const correct = entries.reduce((s, e) => s + e.score, 0);
  const answered = entries.reduce((s, e) => s + e.total, 0);
  const seconds = entries.reduce((s, e) => s + e.seconds, 0);
  return {
    completed: entries.length,
    correct,
    answered,
    seconds,
    avgScore: answered > 0 ? Math.round((correct / answered) * 100) : 0,
  };
}
