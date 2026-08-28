import { AppImage } from "@/components/AppImage";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ModuleCard } from "@/components/LessonCard";
import { course, modules } from "@/data/course";

const highlights = [
  {
    href: "/lessons/kak-varyat-pivo",
    src: "/images/lessons/02/hero.png",
    title: "Варка",
    caption: "От зерна до котла: где появляется хлеб, горечь и чистота.",
  },
  {
    href: "/lessons/degustatsiya",
    src: "/images/lessons/03/hero.png",
    title: "Дегустация",
    caption: "Пять минут внимания важнее красивого сравнения с вином.",
  },
  {
    href: "/lessons/etiketka",
    src: "/images/lessons/04/hero.png",
    title: "Этикетка",
    caption: "Плотность, градусы и «пивной напиток» — на обороте бутылки.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="py-10 md:py-16">
          <div className="relative overflow-hidden rounded-[2rem] bg-stout">
            <AppImage
              src="/images/home/hero.png"
              alt="Бокал пива, солод и хмель на деревянном столе"
              width={1600}
              height={900}
              priority
              className="h-[min(70vh,36rem)] w-full object-cover"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="text-sm tracking-[0.2em] text-copper uppercase">
                {course.audience} · {course.duration}
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] md:text-7xl">
                {course.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">
                {course.tagline}. Все 24 урока с конспектами: от солода и этикетки
                до IPA, кислого пива и пар с русской едой.
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
                <li>
                  прочитать российскую этикетку: плотность, ГОСТ, фильтрация;
                </li>
                <li>
                  рассказать историю пильзнера, IPA, стаута и «Жигулёвского»;
                </li>
                <li>подобрать пиво к русской еде и вести дневник дегустаций.</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div>
          <p className="text-sm tracking-[0.18em] text-copper uppercase">
            С чего начать
          </p>
          <h2 className="mt-2 font-display text-4xl">Три кадра первого модуля</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group overflow-hidden rounded-3xl border border-line bg-foam"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <AppImage
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl group-hover:text-copper">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  {item.caption}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>

      <Container className="pb-16">
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
