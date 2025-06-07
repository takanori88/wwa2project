// app/components/essay/EssayNavigation.tsx
import Link from 'next/link';

export default function EssayNavigation() {
  return (
    <div className="mt-8 text-center">
      <Link href="/essays" className="text-blue-600 hover:underline">
        ← Back to Essays
      </Link>
    </div>
  );
}
