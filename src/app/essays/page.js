// src/app/essays/page.js
import Link from "next/link";
import { essays } from "@/data/essays";
import { seasons } from "@/data/seasons"; // ← NEW!!

export default function EssaysPage() {
  const groupedEssays = essays.reduce((acc, essay) => {
    if (!acc[essay.season]) {
      acc[essay.season] = [];
    }
    acc[essay.season].push(essay);
    return acc;
  }, {});
  
  return (
    <div className="flex flex-col items-center p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Essays</h2>
      <p className="text-sm text-gray-500 max-w-2xl mb-8">
      Essays will be posted in the order they are ready, rather than strictly following the timeline. Thank you for following along this unfolding journey!
      </p>

      <div className="space-y-6 max-w-2xl w-full">
        {Object.entries(groupedEssays).map(([season, essays]) => (
          <details key={season} className="border rounded">
            <summary className="cursor-pointer p-4 text-lg font-normal bg-gray-50">
              Season {season} ({essays.length} {essays.length === 1 ? 'episode' : 'episodes'})
              {/* ここにサブタイトル追加！！ */}
              <p className="text-gray-500 italic my-2">{seasons[season]?.title}</p>
            </summary>

            <div className="p-4 space-y-6">
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
          </details>
        ))}
      </div>
    </div>
  );
}