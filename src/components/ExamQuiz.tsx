"use client";

import { useState } from "react";
import { examPassScore, examQuestions } from "@/data/exam";

export function ExamQuiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => examQuestions.map(() => null),
  );
  const [submitted, setSubmitted] = useState(false);

  const score = examQuestions.reduce((total, question, index) => {
    return total + (answers[index] === question.correctIndex ? 1 : 0);
  }, 0);
  const allAnswered = answers.every((answer) => answer !== null);
  const passed = score >= examPassScore;

  function reset() {
    setAnswers(examQuestions.map(() => null));
    setSubmitted(false);
  }

  return (
    <div className="mt-10 max-w-3xl space-y-6">
      {examQuestions.map((question, index) => {
        const selected = answers[index];
        const showResult = submitted;

        return (
          <fieldset
            key={question.id}
            className="rounded-3xl border border-line bg-foam p-6"
          >
            <legend className="px-1">
              <span className="text-xs tracking-wide text-copper uppercase">
                Вопрос {index + 1} из {examQuestions.length}
              </span>
              <span className="mt-2 block font-display text-2xl leading-snug text-ink">
                {question.question}
              </span>
            </legend>
            <div className="mt-5 space-y-2">
              {question.options.map((option, optionIndex) => {
                const isSelected = selected === optionIndex;
                const isCorrect = optionIndex === question.correctIndex;
                let extra = "border-line hover:border-copper/40";
                if (showResult && isCorrect) {
                  extra = "border-malt bg-malt/20";
                } else if (showResult && isSelected && !isCorrect) {
                  extra = "border-copper bg-copper/10";
                } else if (!showResult && isSelected) {
                  extra = "border-stout bg-stout/5";
                }

                return (
                  <label
                    key={option}
                    className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 text-sm leading-6 ${extra} ${showResult ? "cursor-default" : ""}`}
                  >
                    <input
                      type="radio"
                      className="mt-1"
                      name={question.id}
                      value={optionIndex}
                      checked={isSelected}
                      disabled={submitted}
                      onChange={() =>
                        setAnswers((current) =>
                          current.map((value, i) =>
                            i === index ? optionIndex : value,
                          ),
                        )
                      }
                    />
                    <span>{option}</span>
                  </label>
                );
              })}
            </div>
            {showResult ? (
              <p className="mt-4 text-sm leading-6 text-ink-soft">
                {question.explanation}
              </p>
            ) : null}
          </fieldset>
        );
      })}

      <div className="flex flex-wrap items-center gap-3">
        {!submitted ? (
          <button
            type="button"
            disabled={!allAnswered}
            onClick={() => setSubmitted(true)}
            className="rounded-full bg-stout px-5 py-3 text-sm text-foam disabled:cursor-not-allowed disabled:opacity-40"
          >
            Проверить ответы
          </button>
        ) : (
          <button
            type="button"
            onClick={reset}
            className="rounded-full border border-ink/20 px-5 py-3 text-sm"
          >
            Пройти ещё раз
          </button>
        )}
        {!submitted && !allAnswered ? (
          <p className="text-sm text-ink-soft">Ответьте на все вопросы</p>
        ) : null}
      </div>

      {submitted ? (
        <section className="rounded-3xl bg-stout p-7 text-foam">
          <p className="text-sm text-malt">
            {score} из {examQuestions.length}
          </p>
          <h2 className="mt-2 font-display text-3xl">
            {passed
              ? "Курс пройден: вы уже разбираетесь"
              : "Ещё рано закрывать конспект"}
          </h2>
          <p className="mt-3 text-sm leading-6 text-foam/80">
            {passed
              ? `Нужно было ${examPassScore} из ${examQuestions.length}. Можно возвращаться к полке без шпаргалки.`
              : `Чтобы пройти, нужно ${examPassScore} верных из ${examQuestions.length}. Просмотрите красные вопросы и попробуйте снова.`}
          </p>
        </section>
      ) : null}
    </div>
  );
}
