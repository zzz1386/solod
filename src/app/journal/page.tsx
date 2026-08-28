import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { TastingJournal } from "@/components/TastingJournal";

export const metadata: Metadata = {
  title: "Дневник дегустаций",
};

export default function JournalPage() {
  return (
    <Container className="py-14">
      <p className="text-sm tracking-[0.18em] text-copper uppercase">
        Практика · зависит от вас
      </p>
      <h1 className="mt-2 font-display text-5xl">Дневник дегустаций</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Цвет, запах, вкус, тело и с чем бы съели. Записи хранятся в браузере, их
        можно копить весь курс и возвращаться к полке без блокнота.
      </p>
      <TastingJournal />
    </Container>
  );
}
