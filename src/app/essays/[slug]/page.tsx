// app/essays/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { essayComponents } from '@/app/essays/essayComponents';
import { essays } from '@/data/essays';
import type { Essay } from '@/types';

export default async function EssayPage({ params }: { params: Essay }) {
  const { slug } = await params; // ここで一回ちゃんと受け取る！

  const EssayComponent = await essayComponents[slug];
  const essayData = essays.find((e) => e.slug === slug);

  if (!EssayComponent || !essayData) {
    notFound();
  }

  return <EssayComponent title={essayData.title} summary={essayData.summary} />;
}

export async function generateStaticParams() {
  return essays.map(({ slug }) => ({ slug }));
}
