import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { examQuestions } from "@/data/course";

export const metadata: Metadata = {
  title: "Экзамен",
};

export default function ExamPage() {
  return (
    <Container className="py-14">
      <p className="text-sm tracking-[0.18em] text-copper uppercase">
        После 24 урока
      </p>
      <h1 className="mt-2 font-display text-5xl">Мини-экзамен</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Закройте конспект. Если уверенно отвечаете на пять вопросов из семи —
        курс пройден: вы уже разбираетесь, а не «просто пьёте».
      </p>
      <ol className="mt-10 max-w-3xl space-y-4">
        {examQuestions.map((question, index) => (
          <li
            key={question}
            className="rounded-2xl border border-line bg-foam p-5"
          >
            <span className="text-xs tracking-wide text-copper uppercase">
              Вопрос {index + 1}
            </span>
            <p className="mt-2 font-display text-2xl leading-snug">{question}</p>
          </li>
        ))}
      </ol>
    </Container>
  );
}
