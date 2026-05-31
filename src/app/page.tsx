"use client";

import { useEffect, useState } from "react";
import { CharacterCreate } from "@/components/CharacterCreate";
import { HomeScreen } from "@/components/HomeScreen";
import { loadPlayer } from "@/lib/playerStorage";
import type { Player } from "@/types/player";

export default function Page() {
  const [player, setPlayer] = useState<Player | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setPlayer(loadPlayer());
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-md items-center justify-center px-4">
        <p className="border-4 border-gray-800 bg-white px-4 py-3 font-mono text-sm font-black shadow-pixel">
          Loading...
        </p>
      </main>
    );
  }

  if (!player) {
    return <CharacterCreate onCreated={setPlayer} />;
  }

  return <HomeScreen player={player} onReset={() => setPlayer(null)} />;
}
