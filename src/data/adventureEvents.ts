export type AdventureEvent = {
  id: string;
  title: string;
  message: string;
  exp: number;
};

export const ADVENTURE_EVENTS: AdventureEvent[] = [
  {
    id: "welcome-smile",
    title: "受付の笑顔",
    message: "受付で明るくあいさつし、会場に祝福の空気を広げた。",
    exp: 20
  },
  {
    id: "toast-cheer",
    title: "乾杯の声援",
    message: "乾杯の瞬間、力いっぱい拍手して祝福ゲージを高めた。",
    exp: 30
  },
  {
    id: "photo-quest",
    title: "記念写真クエスト",
    message: "最高の一枚を撮るために、仲間たちをそっと呼び集めた。",
    exp: 25
  },
  {
    id: "bouquet-magic",
    title: "花束の魔法",
    message: "花束に込められた想いを感じ取り、会場の幸運が上がった。",
    exp: 35
  },
  {
    id: "clap-combo",
    title: "拍手コンボ",
    message: "絶妙なタイミングの拍手で、新郎新婦に勇気を届けた。",
    exp: 40
  }
];

export function getRandomAdventureEvent() {
  const index = Math.floor(Math.random() * ADVENTURE_EVENTS.length);
  return ADVENTURE_EVENTS[index];
}
