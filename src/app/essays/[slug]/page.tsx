// app/essays/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { essayComponents } from '@/app/essays/essayComponents';
import { essays } from '@/data/essays';

export default async function EssayPage({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const EssayComponent = essayComponents[slug];
  const essayData = essays.find((e) => e.slug === slug);

  if (!EssayComponent || !essayData) {
    notFound();
  }

  return <EssayComponent title={essayData.title} summary={essayData.summary} />;
}

export async function generateStaticParams(): Promise<
  { params: { slug: string } }[]
> {
  return essays.map(({ slug }) => ({ params: { slug } }));
}
