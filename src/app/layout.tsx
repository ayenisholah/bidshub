import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BidsHub - Automated NFT Bidding Bot",
  description:
    "High-speed NFT bidding automation on OpenSea and Blur. 1 to 100+ bids per second. Custom analyzer tools, Profit Sharing Plan, and API access. Your tool for passive income.",
  openGraph: {
    title: "BidsHub - Automated NFT Bidding Bot",
    description:
      "1 to 100+ bids/sec. OpenSea + Blur. Custom analyzer tools. Your tool for passive income.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
