import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ExamQuiz } from "@/components/ExamQuiz";
import { examPassScore, examQuestions } from "@/data/exam";

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
        Один ответ из четырёх. Если верно {examPassScore} из{" "}
        {examQuestions.length} — курс пройден: вы уже разбираетесь, а не «просто
        пьёте».
      </p>
      <ExamQuiz />
    </Container>
  );
}
