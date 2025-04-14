import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VAnimeVault",
  description: "Your favorite anime, all in one place.",
  metadataBase:new URL("https://vanimevault.vercel.app/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vanimevault.vercel.app/",
    title: "VAnimeVault",
    siteName: "VAnimeVault",
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
      <head>
        <link rel="icon" href="/fav.png" type="image/png" />
      </head>
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#17110f]">
          <Hero />
          {children}
          <Footer />
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
