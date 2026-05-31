import type { JobId, Player } from "@/types/player";

const PLAYER_STORAGE_KEY = "wedding-rpg-player";

type NewPlayerInput = {
  nickname: string;
  jobId: JobId;
};

export function createPlayer({ nickname, jobId }: NewPlayerInput): Player {
  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    nickname: nickname.trim(),
    jobId,
    level: 1,
    exp: 0,
    createdAt: now,
    updatedAt: now
  };
}

export function loadPlayer(): Player | null {
  if (typeof window === "undefined") {
    return null;
  }

  const rawPlayer = window.localStorage.getItem(PLAYER_STORAGE_KEY);

  if (!rawPlayer) {
    return null;
  }

  try {
    return JSON.parse(rawPlayer) as Player;
  } catch {
    window.localStorage.removeItem(PLAYER_STORAGE_KEY);
    return null;
  }
}

export function savePlayer(player: Player) {
  window.localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(player));
}

export function clearPlayer() {
  window.localStorage.removeItem(PLAYER_STORAGE_KEY);
}
