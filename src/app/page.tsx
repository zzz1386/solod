import Link from "next/link";
import { Container } from "@/components/Container";
import { ModuleCard } from "@/components/LessonCard";
import { course, modules } from "@/data/course";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-end md:py-24">
          <div>
            <p className="text-sm tracking-[0.2em] text-copper uppercase">
              {course.audience} · {course.duration}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">
              {course.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">
              {course.tagline}. Каркас сайта уже собран: модули, уроки, факты и
              практика. Полные конспекты будут добавляться в эти страницы.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/program"
                className="rounded-full bg-stout px-5 py-3 text-sm text-foam"
              >
                Смотреть программу
              </Link>
              <Link
                href="/lessons/chto-takoe-pivo"
                className="rounded-full border border-ink/20 px-5 py-3 text-sm"
              >
                Начать с урока 1
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-stout p-7 text-foam">
            <p className="text-sm text-malt">После курса вы сможете</p>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              <li>отличить эль от лагера и узнать стиль по вкусу;</li>
              <li>прочитать российскую этикетку: плотность, ГОСТ, фильтрация;</li>
              <li>рассказать историю пильзнера, IPA, стаута и «Жигулёвского»;</li>
              <li>подобрать пиво к русской еде и вести дневник дегустаций.</li>
            </ul>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm tracking-[0.18em] text-copper uppercase">
              Структура курса
            </p>
            <h2 className="mt-2 font-display text-4xl">Семь модулей</h2>
          </div>
          <Link href="/modules" className="text-sm text-copper">
            Все модули
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {modules.map((module) => (
            <ModuleCard key={module.slug} module={module} />
          ))}
        </div>
      </Container>
    </>
  );
}
