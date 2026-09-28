import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseDetail from "@/components/CaseDetail";
import { content } from "@/lib/content";

type Params = Promise<{ slug: string }>;

const findCase = (slug: string) => content.en.cases.find((c) => c.slug === slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return content.en.cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const c = findCase((await params).slug);
  if (!c) return {};
  return {
    title: `${c.title} — José Machado`,
    description: c.detail.lede,
  };
}

export default async function CasePage({ params }: { params: Params }) {
  const { slug } = await params;
  if (!findCase(slug)) notFound();
  return <CaseDetail slug={slug} />;
}
