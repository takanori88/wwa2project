"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-6 border-b relative">
      <div className="text-2xl font-bold">WWA²</div>

      {/* PCサイズ用 */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/essays" className="hover:underline">
          Essays
        </Link>
        <Link href="/philosophy" className="hover:underline">
          Philosophy
        </Link>
        <Link href="/questions" className="hover:underline">
          Open Questions
        </Link>
      </nav>

      {/* モバイル用ハンバーガーメニュー */}
      <div className="md:hidden">
        <button
          className="w-8 h-8 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* モバイル用メニュー展開 */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white border-t flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link
            href="/"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/essays"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Essays
          </Link>
          <Link
            href="/philosophy"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Philosophy
          </Link>
          <Link
            href="/questions"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Open Questions
          </Link>
        </div>
      )}
    </header>
  );
}
