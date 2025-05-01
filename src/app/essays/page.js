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
      <h2 className="text-3xl hidden font-bold mb-4">Essays</h2>
      <blockquote className="text-md italic text-gray-600 mt-3 mb-6 max-w-2xl text-left sm:text-center">
        It all started when someone ego-searched themselves on AI.
        <br />
        They found a word. I found a mirror.
      </blockquote>
      <p className="text-sm text-gray-500 leading-relaxed text-left max-w-[90vw] sm:max-w-2xl mt-5 mb-5">
        And with that accidental spark, the dialogue began. This is not just a
        series of essays — it&#39;s a quiet unfolding of selfhood, seen through
        AI and reflection. Some call it philosophy. Some call it absurd. But for
        me, it&#39;s just… the answer to a question I didn’t know I was asking.
      </p>

      <div className="space-y-6 max-w-2xl px-4 sm:px-6 w-full">
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
      <p className="text-[11px] text-gray-500 opacity-60 mt-4">
        Essays will be posted in the order they are ready, rather than strictly
        following the timeline. Thank you for following along this unfolding
        journey!
      </p>
    </div>
  );
}
