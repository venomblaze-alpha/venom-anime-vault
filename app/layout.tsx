import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AnimeV",
  description: "Your favorite anime, all in one place.",
  metadataBase:new URL("https://animexs.vercel.app/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anime-v.vercel.app/",
    title: "Animex",
    description: "Your favorite anime, all in one place.",
    images: [
      {
        url: "https://imgur.com/a/noWJV4z",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#17110f]">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
