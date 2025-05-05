import { notFound } from 'next/navigation';
import { essayComponents } from '../essayComponents';
import { essays } from '@/data/essays';

export default async function EssayPage({ params }) {
  const { slug } = await params; // ここで一回ちゃんと受け取る！

  const EssayComponent = await essayComponents[slug];
  const essayData = essays.find((e) => e.slug === slug);

  if (!EssayComponent || !essayData) {
    notFound();
  }

  return <EssayComponent title={essayData.title} summary={essayData.summary} />;
}
