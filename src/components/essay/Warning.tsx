// app/components/essay/Warning.tsx
import type { WithChildren } from '@/types/components';

export function Warning({ children }: WithChildren) {
  return (
    <div className="bg-yellow-50 text-neutral-800 rounded-md p-6 my-4 max-w-2xl w-full text-left">
      <div className="font-bold mb-2">⚠️</div>
      <div className="prose prose-sm break-words [&_pre]:overflow-x-auto [&_pre]:text-sm">
        {children}
      </div>
    </div>
  );
}
