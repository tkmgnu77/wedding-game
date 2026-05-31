"use client";

import { FormEvent, useState } from "react";
import { JOBS, type JobId, type Player } from "@/types/player";
import { createPlayer, savePlayer } from "@/lib/playerStorage";

type CharacterCreateProps = {
  onCreated: (player: Player) => void;
};

export function CharacterCreate({ onCreated }: CharacterCreateProps) {
  const [nickname, setNickname] = useState("");
  const [jobId, setJobId] = useState<JobId>(JOBS[0].id);
  const canCreate = nickname.trim().length > 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canCreate) {
      return;
    }

    const player = createPlayer({ nickname, jobId });
    savePlayer(player);
    onCreated(player);
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-6">
      <section className="flex flex-1 flex-col justify-center gap-6">
        <div className="space-y-3 text-center">
          <p className="font-mono text-xs font-bold tracking-[0.2em] text-rose-700">
            WEDDING RPG
          </p>
          <h1 className="text-3xl font-black leading-tight text-gray-900">
            祝福の冒険者を作成
          </h1>
          <p className="text-sm leading-6 text-gray-700">
            新郎新婦の結婚式を成功へ導く、あなたのキャラクターを登録しましょう。
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 border-4 border-gray-800 bg-white p-4 shadow-pixel"
        >
          <label className="block space-y-2">
            <span className="font-mono text-sm font-bold text-gray-900">
              ニックネーム
            </span>
            <input
              value={nickname}
              onChange={(event) => setNickname(event.target.value)}
              maxLength={16}
              placeholder="例: タケ"
              className="w-full rounded-none border-4 border-gray-800 bg-amber-50 px-3 py-3 text-base outline-none focus:border-rose-600"
            />
          </label>

          <fieldset className="space-y-3">
            <legend className="font-mono text-sm font-bold text-gray-900">
              職業選択
            </legend>
            <div className="grid gap-3">
              {JOBS.map((job) => {
                const selected = job.id === jobId;

                return (
                  <label
                    key={job.id}
                    className={`flex cursor-pointer gap-3 border-4 p-3 transition ${
                      selected
                        ? "border-rose-600 bg-rose-50"
                        : "border-gray-800 bg-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name="job"
                      value={job.id}
                      checked={selected}
                      onChange={() => setJobId(job.id)}
                      className="mt-1 h-5 w-5 accent-rose-600"
                    />
                    <span className="space-y-1">
                      <span className="block font-bold text-gray-900">
                        {job.name}
                      </span>
                      <span className="block text-sm text-gray-600">
                        {job.description}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <button
            type="submit"
            disabled={!canCreate}
            className="w-full border-4 border-gray-900 bg-rose-600 px-4 py-3 font-mono text-sm font-black text-white shadow-pixel transition active:translate-x-1 active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            冒険をはじめる
          </button>
        </form>
      </section>
    </main>
  );
}
