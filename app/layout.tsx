import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Godwin | Webflow Portfolio",
  description: "Portfolio of Godwin, a web developer and designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-urbanist bg-black text-white">{children}</body>
    </html>
  );
}
