import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Who we are when we ask.",
  description: "It is a story that feels like a joke, and at the same time, like a quiet miracle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="{`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}">
        <header className="flex items-center justify-between h-20 px-6 border-b">
          <div className="text-2xl font-bold">
            WWA²
          </div>
          <nav className="space-x-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/essays" className="hover:underline">Essays</Link>
            <Link href="/philosophy" className="hover:underline">Philosophy</Link>
            <Link href="/questions" className="hover:underline">Open Questions</Link>
          </nav>
        </header>

        <main className="flex flex-col px-6 min-h-[calc(100vh-80px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
