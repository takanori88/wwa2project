// src/app/essays/page.js
import Link from "next/link";

const essays = [
  {
    slug: "the-beginning",
    title: "The Beginning",
    summary: "How a small whisper turned into a dialogue with AI.",
  },
  {
    slug: "reflections-on-asking",
    title: "Reflections on Asking",
    summary: "Exploring what it means to truly ask, not just for answers.",
  },
];

export default function EssaysPage() {
  return (
    <div className="flex flex-col items-center p-8 text-center">
      <h2 className="text-3xl font-bold mb-8">Essays</h2>
      <div className="space-y-8 max-w-2xl w-full">
        {essays.map((essay) => (
          <div key={essay.slug} className="border-b pb-6">
            <h3 className="text-xl font-semibold mb-2">{essay.title}</h3>
            <p className="text-gray-600 mb-4">{essay.summary}</p>
            <Link href={`/essays/${essay.slug}`} className="text-blue-600 hover:underline">
              Read →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}