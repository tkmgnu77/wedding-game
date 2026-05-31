export const JOBS = [
  {
    id: "brave_guest",
    name: "祝福の勇者",
    description: "会場を明るくする前衛役"
  },
  {
    id: "toast_mage",
    name: "乾杯の魔法使い",
    description: "一言で空気を温める支援役"
  },
  {
    id: "photo_ranger",
    name: "記録のレンジャー",
    description: "最高の瞬間を逃さない探索役"
  }
] as const;

export type JobId = (typeof JOBS)[number]["id"];

export type Player = {
  id: string;
  nickname: string;
  jobId: JobId;
  level: number;
  exp: number;
  createdAt: string;
  updatedAt: string;
};

export function getJobById(jobId: JobId) {
  return JOBS.find((job) => job.id === jobId) ?? JOBS[0];
}
