// src/components/essay/Narration.jsx
import type { WithChildren } from '@/types/components';

export default function Narration({ children }) {
  return <p className="text-center italic text-gray-600 my-6">{children}</p>;
}
