import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { howToStudy } from "@/data/course";

export const metadata: Metadata = {
  title: "Как учиться",
};

export default function HowToPage() {
  return (
    <Container className="py-14">
      <h1 className="font-display text-5xl">Как учиться</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">{howToStudy.format}</p>
      <p className="mt-2 text-ink-soft">{howToStudy.pace}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <section className="rounded-3xl border border-line bg-foam p-6">
          <h2 className="font-display text-3xl">Что завести</h2>
          <ul className="mt-4 space-y-2 text-ink-soft">
            {howToStudy.tools.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl border border-line bg-foam p-6 md:col-span-2">
          <h2 className="font-display text-3xl">Правила</h2>
          <ul className="mt-4 space-y-3 text-ink-soft">
            {howToStudy.rules.map((item) => (
              <li key={item} className="border-b border-line pb-3 last:border-0">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-8 rounded-3xl bg-stout p-7 text-foam">
        <h2 className="font-display text-3xl">Минимальная полка на весь курс</h2>
        <p className="mt-3 max-w-2xl text-sm text-foam/70">
          80% программы закрывается супермаркетом. Не гонитесь за редкостью.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {howToStudy.shelf.map((item) => (
            <li key={item} className="rounded-xl bg-white/5 px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
