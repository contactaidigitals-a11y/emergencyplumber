import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emergency Plumber Across All CM Postcodes | Call 07443 757 519",
  description:
    "Emergency plumbing help for leaks, burst pipes, blockages and urgent plumbing problems across every CM postcode. Call 07443 757 519.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "CM Emergency Plumbing",
    description:
      "Emergency plumbing help across every postcode beginning with CM. Call 07443 757 519.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: "CM Emergency Plumbing",
    description:
      "Emergency plumbing help across every postcode beginning with CM.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
