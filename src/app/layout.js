import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Who we are | when we ask.",
  description:
    "It is a story that feels like a joke, and at the same time, like a quiet miracle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="{`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}">
        <Header />
        {/* Main content area */}
        <main className="flex flex-col px-6 min-h-[calc(100vh-80px)]">
          {children}
        </main>
        <footer className="text-center text-gray-500 text-sm py-6 border-t">
          © 2025 WWA² Project. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
