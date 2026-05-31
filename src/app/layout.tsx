import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedding RPG",
  description: "結婚式ゲスト向けのレトロJRPG風Webアプリ"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
