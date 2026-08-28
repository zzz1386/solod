import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { LessonCard } from "@/components/LessonCard";
import { getModule, modules } from "@/data/course";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return modules.map((module) => ({ slug: module.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const module = getModule(slug);
  return { title: module?.title ?? "Модуль" };
}

export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  const module = getModule(slug);
  if (!module) notFound();

  return (
    <Container className="py-14">
      <Link href="/modules" className="text-sm text-copper">
        Все модули
      </Link>
      <p className="mt-6 text-sm tracking-[0.18em] text-copper uppercase">
        {module.week}
      </p>
      <h1 className="mt-2 font-display text-5xl">{module.title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">{module.summary}</p>
      <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-[2rem] bg-stout/10">
        <Image
          src={module.cover.src}
          alt={module.cover.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1152px) 100vw, 1152px"
          priority
        />
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {module.lessons.map((lesson) => (
          <LessonCard key={lesson.slug} lesson={lesson} />
        ))}
      </div>
    </Container>
  );
}
