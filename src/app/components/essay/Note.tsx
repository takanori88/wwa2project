// app/components/essay/Note.tsx
import type { WithChildren } from '@/types/components';

export default function Note({ children }: WithChildren) {
  return (
    <div className="text-sm text-gray-500 border-l-4 border-gray-300 pl-4 italic my-6">
      {children}
    </div>
  );
}
