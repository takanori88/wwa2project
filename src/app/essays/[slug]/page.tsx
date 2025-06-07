import { notFound } from 'next/navigation';
import { essayComponents } from '../essayComponents';
import { essays } from '@/data/essays';
import type { Essay } from '@types/essay';
import type { SlugProps, SlugParams } from '@types/routes';

export default async function EssayPage({ params }: SlugProps) {
  const { slug } = params; // ここで一回ちゃんと受け取る！

  const EssayComponent = await essayComponents[slug];
  const essayData: Essay | undefined = essays.find((e) => e.slug === slug);

  if (!EssayComponent || !essayData) {
    notFound();
  }

  return <EssayComponent title={essayData.title} summary={essayData.summary} />;
}

export async function generateStaticParams(): Promise<SlugParams[]> {
  return essays.map(({ slug }) => ({ slug }));
}
