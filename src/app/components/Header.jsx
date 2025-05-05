'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-6 border-b relative">
      <Link href="/" className="text-2xl font-bold">
        WWA²
      </Link>

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
        <Link href="/glossary" className="hover:underline">
          Glossary
        </Link>
      </nav>

      {/* モバイル用ハンバーガーメニュー */}
      <div className="md:hidden">
        <button
          className="w-8 h-8 flex items-center justify-center"
          onClick={() => setIsOpen(true)}
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

      {/* モバイルメニューのオーバーレイ */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-white flex items-center justify-center md:hidden"
          onClick={() => setIsOpen(false)} // 背景タップで閉じる
        >
          <div
            className="relative flex flex-col items-center space-y-8 text-xl"
            onClick={(e) => e.stopPropagation()} // メニュー内タップは反応させない
          >
            {/* ナビリンク */}
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
              href="/glossary"
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Glossary
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
