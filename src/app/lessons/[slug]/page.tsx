import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { FactBlock } from "@/components/FactBlock";
import { LessonArticle } from "@/components/LessonArticle";
import { getLessonContent } from "@/content/lessons";
import {
  getAdjacentLessons,
  getAllLessons,
  getLesson,
  lessonTiming,
} from "@/data/course";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllLessons().map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  return { title: lesson ? `Урок ${lesson.number}. ${lesson.title}` : "Урок" };
}

export default async function LessonPage({ params }: Props) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  const content = getLessonContent(slug);
  const { prev, next } = getAdjacentLessons(slug);

  return (
    <Container className="py-14">
      <div className="max-w-3xl">
        <Link
          href={`/modules/${lesson.module.slug}`}
          className="text-sm text-copper"
        >
          {lesson.module.title}
        </Link>
        <p className="mt-6 text-sm tracking-[0.18em] text-ink-soft uppercase">
          Урок {lesson.number} из 24 · теория {lessonTiming.theory} · практика{" "}
          {lessonTiming.practice}
        </p>
        <h1 className="mt-3 font-display text-5xl leading-tight">
          {lesson.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink-soft">{lesson.goal}</p>
      </div>

      {content ? (
        <LessonArticle lesson={lesson} content={content} />
      ) : (
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-3xl border border-line bg-foam p-7">
            <h2 className="font-display text-3xl">Темы урока</h2>
            <ul className="mt-5 space-y-3 text-ink-soft">
              {lesson.topics.map((topic) => (
                <li key={topic} className="border-b border-line pb-3 last:border-0">
                  {topic}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-paper p-5">
              <p className="text-xs tracking-[0.18em] text-copper uppercase">
                Конспект
              </p>
              <p className="mt-2 text-sm leading-6 text-ink-soft">
                Каркас урока готов. Сюда позже добавится полный текст: история,
                разбор вкуса, что искать на российской полке и словарик.
              </p>
            </div>
          </section>
          <div className="space-y-5">
            <FactBlock>{lesson.fact}</FactBlock>
            <section className="rounded-3xl border border-line bg-foam p-7">
              <p className="text-xs tracking-[0.18em] text-copper uppercase">
                Практика · {lessonTiming.practice}
              </p>
              <h2 className="mt-2 font-display text-3xl">Практика</h2>
              <p className="mt-3 leading-7 text-ink-soft">{lesson.practice}</p>
            </section>
          </div>
        </div>
      )}

      <nav className="mt-12 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:justify-between">
        {prev ? (
          <Link href={`/lessons/${prev.slug}`} className="max-w-sm">
            <span className="text-xs tracking-wide text-ink-soft uppercase">
              Предыдущий
            </span>
            <span className="mt-1 block font-display text-2xl">
              {prev.number}. {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/lessons/${next.slug}`} className="max-w-sm sm:text-right">
            <span className="text-xs tracking-wide text-ink-soft uppercase">
              Следующий
            </span>
            <span className="mt-1 block font-display text-2xl">
              {next.number}. {next.title}
            </span>
          </Link>
        ) : null}
      </nav>
    </Container>
  );
}
