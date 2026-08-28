import { AppImage } from "@/components/AppImage";
import Link from "next/link";
import type { Lesson, LessonContent, LessonImage } from "@/lib/types";
import { FactBlock } from "@/components/FactBlock";
import { lessonTiming } from "@/data/course";

function Figure({ image, priority = false }: { image: LessonImage; priority?: boolean }) {
  return (
    <figure className="overflow-hidden rounded-3xl bg-stout/5">
      <AppImage
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        className="h-auto w-full object-cover"
        sizes="(max-width: 1024px) 100vw, 720px"
      />
      <figcaption className="px-4 py-3 text-sm leading-6 text-ink-soft">
        {image.caption}
      </figcaption>
    </figure>
  );
}

export function LessonArticle({
  lesson,
  content,
}: {
  lesson: Lesson;
  content: LessonContent;
}) {
  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <article className="min-w-0 space-y-12">
        <Figure image={content.hero} priority />

        <p className="font-display text-2xl leading-snug text-ink">{content.lead}</p>

        {content.sections.map((section) => (
          <section key={section.id} id={section.id} className="space-y-5">
            <h2 className="font-display text-4xl">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-ink-soft">
                {paragraph}
              </p>
            ))}
            {section.image ? <Figure image={section.image} /> : null}
            {section.list ? (
              <ul className="space-y-4">
                {section.list.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-line bg-foam px-5 py-4 leading-7 text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <section className="space-y-5">
          <h2 className="font-display text-4xl">Словарь урока</h2>
          <dl className="grid gap-4 sm:grid-cols-2">
            {content.glossary.map((item) => (
              <div key={item.term} className="rounded-2xl border border-line bg-foam p-5">
                <dt className="font-display text-2xl">{item.term}</dt>
                <dd className="mt-2 text-sm leading-6 text-ink-soft">{item.definition}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rounded-3xl bg-stout p-7 text-foam">
          <h2 className="font-display text-3xl">Что унести из урока</h2>
          <ol className="mt-5 space-y-3">
            {content.takeaways.map((item, index) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-foam/85">
                <span className="text-malt">{index + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>
      </article>

      <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
        <FactBlock>{lesson.fact}</FactBlock>
        {content.factImage ? <Figure image={content.factImage} /> : null}
        <section className="rounded-3xl border border-line bg-foam p-6">
          <p className="text-xs tracking-[0.18em] text-copper uppercase">
            Практика · {lessonTiming.practice}
          </p>
          <h2 className="mt-2 font-display text-3xl">Практика</h2>
          <p className="mt-3 leading-7 text-ink-soft">{lesson.practice}</p>
          <Link
            href="/journal"
            className="mt-4 inline-block text-sm text-copper"
          >
            Записать в дневник дегустаций
          </Link>
        </section>
        <section className="rounded-3xl border border-line bg-foam p-6">
          <p className="text-xs tracking-[0.18em] text-copper uppercase">
            Теория · {lessonTiming.theory}
          </p>
          <h2 className="mt-2 font-display text-2xl">Темы</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-ink-soft">
            {lesson.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}
