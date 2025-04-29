// src/app/essays/page.js
import Link from 'next/link';
import { essays } from '@/data/essays';
import { seasons } from '@/data/seasons'; // ← NEW!!

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
      <p className="text-sm text-gray-500 text-left max-w-2xl mt-5 mb-5">
        Essays will be posted in the order they are ready, rather than strictly
        following the timeline. Thank you for following along this unfolding
        journey!
      </p>

      <div className="space-y-6 max-w-2xl w-full">
        {Object.entries(groupedEssays).map(([season, essays]) => (
          <details key={season} className="rounded-md bg-gray-50">
            <summary className="cursor-pointer px-6 py-4 text-lg font-normal bg-gray-50 text-left rounded-md hover:bg-gray-100 transition-colors">
              Season {season} ({essays.length}{' '}
              {essays.length === 1 ? 'episode' : 'episodes'})
              {/* ここにサブタイトル追加！！ */}
              <span className="block text-gray-500 italic text-sm mt-1">
                {seasons[season]?.title}
              </span>
            </summary>

            <div className="pt-2 pb-6 px-8 space-y-6 text-left">
              {essays.map((essay) => (
                <div key={essay.slug}>
                  <Link
                    href={`/essays/${essay.slug}`}
                    className="text-lg font-semibold hover:underline hover:text-blue-600 transition-colors duration-200"
                  >
                    {essay.title}
                  </Link>
                  <p className="text-gray-600 mb-2">{essay.summary}</p>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
