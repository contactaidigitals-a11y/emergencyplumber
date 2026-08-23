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
  metadataBase: new URL("https://cm-emergency-plumbing-help.andreiacalinescu.chatgpt.site"),
  title: "ReadyCall Plumbing 24/7 | Emergency Plumber Across CM",
  description:
    "24/7 emergency plumbing for leaks, burst pipes, blockages and urgent problems across every CM postcode. Call 07930 392 114.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "ReadyCall Plumbing 24/7 | Open 24/7",
    description:
      "24/7 emergency plumbing help across every postcode beginning with CM. Call 07930 392 114.",
    images: [
      {
        url: "/og.png",
        alt: "ReadyCall Plumbing 24/7 — emergency plumber across all CM postcodes",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReadyCall Plumbing 24/7 | Open 24/7",
    description:
      "24/7 emergency plumbing help across every postcode beginning with CM.",
    images: ["/og.png"],
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
