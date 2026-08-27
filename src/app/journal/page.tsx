import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Дневник дегустаций",
};

export default function JournalPage() {
  return (
    <Container className="py-14">
      <p className="text-sm tracking-[0.18em] text-copper uppercase">
        Заготовка
      </p>
      <h1 className="mt-2 font-display text-5xl">Дневник дегустаций</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Сюда позже можно добавить форму: стиль, дата, внешний вид, аромат,
        вкус, тело, с чем съели. Пока ведите записи в блокноте по пяти строкам
        на урок.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-5">
        {["Цвет", "Запах", "Вкус", "Тело", "С чем бы съел"].map((field) => (
          <div
            key={field}
            className="min-h-36 rounded-2xl border border-dashed border-ink/20 bg-foam p-5"
          >
            <p className="text-sm text-copper">{field}</p>
            <p className="mt-8 text-sm text-ink-soft">Поле появится здесь</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
