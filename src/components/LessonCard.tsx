import Image from "next/image";
import Link from "next/link";
import { lessonTiming } from "@/data/course";
import type { Lesson, Module } from "@/lib/types";

function lessonCountLabel(count: number) {
  const n10 = count % 10;
  const n100 = count % 100;
  if (n10 === 1 && n100 !== 11) return `${count} урок`;
  if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return `${count} урока`;
  return `${count} уроков`;
}

export function LessonCard({
  lesson,
  moduleTitle,
}: {
  lesson: Lesson;
  moduleTitle?: string;
}) {
  return (
    <Link
      href={`/lessons/${lesson.slug}`}
      className="group block rounded-2xl border border-line bg-foam p-5 transition-transform hover:-translate-y-0.5"
    >
      <div className="flex items-center justify-between gap-3 text-xs text-ink-soft">
        <span className="tracking-wide uppercase">Урок {lesson.number}</span>
        <span className="text-right">
          Теория {lessonTiming.theory}
          <span className="mx-1">·</span>
          практика {lessonTiming.practice}
        </span>
      </div>
      {moduleTitle ? (
        <p className="mt-3 text-sm text-copper">{moduleTitle}</p>
      ) : null}
      <h3 className="mt-1 font-display text-2xl leading-tight group-hover:text-copper">
        {lesson.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-ink-soft">{lesson.goal}</p>
    </Link>
  );
}

export function ModuleCard({ module }: { module: Module }) {
  return (
    <Link
      href={`/modules/${module.slug}`}
      className="group block overflow-hidden rounded-2xl border border-line bg-foam transition-transform hover:-translate-y-0.5"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-stout/10">
        <Image
          src={module.cover.src}
          alt={module.cover.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <p className="text-xs tracking-wide text-copper uppercase">
          {module.week} · {lessonCountLabel(module.lessons.length)}
        </p>
        <h3 className="mt-2 font-display text-3xl group-hover:text-copper">
          {module.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-ink-soft">{module.summary}</p>
      </div>
    </Link>
  );
}
