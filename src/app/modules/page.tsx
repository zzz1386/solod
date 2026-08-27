import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ModuleCard } from "@/components/LessonCard";
import { modules } from "@/data/course";

export const metadata: Metadata = {
  title: "Модули",
};

export default function ModulesPage() {
  return (
    <Container className="py-14">
      <h1 className="font-display text-5xl">Модули</h1>
      <p className="mt-4 max-w-2xl text-ink-soft">
        Курс идёт от языка пива и истории к стилям, а заканчивается едой,
        хранением и финальной картой вкусов.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {modules.map((module) => (
          <ModuleCard key={module.slug} module={module} />
        ))}
      </div>
    </Container>
  );
}
