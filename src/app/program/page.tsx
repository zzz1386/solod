import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { LessonCard } from "@/components/LessonCard";
import { modules } from "@/data/course";

export const metadata: Metadata = {
  title: "Программа",
};

export default function ProgramPage() {
  return (
    <Container className="py-14">
      <p className="text-sm tracking-[0.18em] text-copper uppercase">
        24 урока
      </p>
      <h1 className="mt-2 font-display text-5xl">Программа курса</h1>
      <p className="mt-4 max-w-2xl text-ink-soft">
        Каждый урок — отдельная страница: цель, темы, интересный факт и
        практика. Конспект урока можно наращивать, не меняя структуру сайта.
      </p>
      <div className="mt-12 space-y-12">
        {modules.map((module) => (
          <section key={module.slug}>
            <div className="mb-5">
              <p className="text-sm text-copper">
                {module.week} · модуль
              </p>
              <h2 className="font-display text-3xl">{module.title}</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {module.lessons.map((lesson) => (
                <LessonCard
                  key={lesson.slug}
                  lesson={lesson}
                  moduleTitle={module.title}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
