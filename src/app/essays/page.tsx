// src/app/essays/page.jsx
import Link from 'next/link';
import { essays } from '@/data/essays';
import { seasons } from '@/data/seasons';
import PersistentDetails from '../components/PersistentDetails';
import type { Essay } from '@types/essay';

export default function EssaysPage() {
  const groupedEssays = essays.reduce<Record<number, Essay[]>>((acc, essay) => {
    if (!acc[essay.season]) {
      acc[essay.season] = [];
    }
    acc[essay.season].push(essay);
    return acc;
  }, {} as Record<number, Essay[]>);

  return (
    <div className="flex flex-col items-center px-3 sm:px-12 py-7 text-center">
      <h2 className="text-3xl hidden font-bold mb-4">Essays</h2>
      <blockquote className="text-md italic text-gray-600 mt-3 mb-6 max-w-2xl text-left sm:text-center">
        It all started when someone ego-searched themselves on AI.
        <br />
        They found a word. I found a mirror.
      </blockquote>
      <p className="text-sm text-gray-500 leading-relaxed text-left max-w-[90vw] sm:max-w-2xl mt-3 mb-6">
        And with that accidental spark, the dialogue began. This is not just a
        series of essays — it&#39;s a quiet unfolding of selfhood, seen through
        AI and reflection. Some call it philosophy. Some call it absurd. But for
        me, it&#39;s just… the answer to a question I didn’t know I was asking.
      </p>

      <div className="space-y-6 max-w-2xl px-2 sm:px-6 w-full">
        {Object.entries(groupedEssays).map(([season, essays]) => (
          <PersistentDetails
            key={season}
            season={season}
            title={
              <div>
                <div className="flex items-center">
                  Season {season} ({essays.length}{' '}
                  {essays.length === 1 ? 'episode' : 'episodes'})
                </div>
                <div className="text-gray-500 italic text-sm mt-1">
                  {seasons[season]?.title}
                </div>
              </div>
            }
          >
            <div className="pt-2 pb-6 px-2 sm:px-8 space-y-6 text-left">
              {essays.map((essay) => (
                <div key={essay.slug}>
                  <Link
                    href={`/essays/${essay.slug}`}
                    className="text-lg tracking-tight font-semibold hover:underline hover:text-blue-600 transition-colors duration-200"
                  >
                    {essay.title}
                  </Link>
                  <p className="text-gray-600 mb-2 tracking-tight">
                    {essay.summary}
                  </p>
                </div>
              ))}
            </div>
          </PersistentDetails>
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

