"use client";

import { clearPlayer } from "@/lib/playerStorage";
import { getJobById, type Player } from "@/types/player";

type HomeScreenProps = {
  player: Player;
  onReset: () => void;
};

export function HomeScreen({ player, onReset }: HomeScreenProps) {
  const job = getJobById(player.jobId);
  const nextLevelExp = player.level * 100;
  const expPercent = Math.min(100, Math.round((player.exp / nextLevelExp) * 100));

  function handleReset() {
    clearPlayer();
    onReset();
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-6">
      <section className="flex flex-1 flex-col gap-5">
        <header className="border-4 border-gray-800 bg-gray-900 p-4 text-white shadow-pixel">
          <p className="font-mono text-xs font-bold tracking-[0.2em] text-amber-200">
            HOME
          </p>
          <h1 className="mt-2 text-2xl font-black">{player.nickname}</h1>
          <p className="mt-1 text-sm text-gray-200">{job.name}</p>
        </header>

        <div className="grid grid-cols-2 gap-3">
          <div className="border-4 border-gray-800 bg-white p-4 shadow-pixel">
            <p className="font-mono text-xs font-bold text-gray-500">LEVEL</p>
            <p className="mt-2 text-4xl font-black text-gray-900">
              {player.level}
            </p>
          </div>
          <div className="border-4 border-gray-800 bg-white p-4 shadow-pixel">
            <p className="font-mono text-xs font-bold text-gray-500">EXP</p>
            <p className="mt-2 text-4xl font-black text-gray-900">
              {player.exp}
            </p>
          </div>
        </div>

        <section className="border-4 border-gray-800 bg-white p-4 shadow-pixel">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-mono text-sm font-black text-gray-900">
              次のレベルまで
            </h2>
            <p className="text-sm font-bold text-gray-700">
              {player.exp} / {nextLevelExp}
            </p>
          </div>
          <div className="mt-3 h-5 border-4 border-gray-800 bg-amber-50">
            <div
              className="h-full bg-emerald-500"
              style={{ width: `${expPercent}%` }}
            />
          </div>
        </section>

        <section className="border-4 border-gray-800 bg-white p-4 shadow-pixel">
          <h2 className="font-mono text-sm font-black text-gray-900">
            冒険者メモ
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-700">
            あなたは祝福の冒険者です。大切な一日を、笑顔と拍手で支えましょう。
          </p>
        </section>

        <button
          type="button"
          onClick={handleReset}
          className="mt-auto w-full border-4 border-gray-900 bg-white px-4 py-3 font-mono text-sm font-black text-gray-900 shadow-pixel transition active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          キャラクターを作り直す
        </button>
      </section>
    </main>
  );
}
