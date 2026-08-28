"use client";

import { FormEvent, useEffect, useState } from "react";

export type JournalEntry = {
  id: string;
  createdAt: string;
  beer: string;
  brewery: string;
  style: string;
  color: string;
  aroma: string;
  taste: string;
  body: string;
  pairing: string;
};

const STORAGE_KEY = "solod-tasting-journal";

const emptyForm = {
  beer: "",
  brewery: "",
  style: "",
  color: "",
  aroma: "",
  taste: "",
  body: "",
  pairing: "",
};

function loadEntries(): JournalEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as JournalEntry[]) : [];
  } catch {
    return [];
  }
}

export function TastingJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setEntries(loadEntries());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries, ready]);

  function update(field: keyof typeof emptyForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.beer.trim()) return;

    const entry: JournalEntry = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      beer: form.beer.trim(),
      brewery: form.brewery.trim(),
      style: form.style.trim(),
      color: form.color.trim(),
      aroma: form.aroma.trim(),
      taste: form.taste.trim(),
      body: form.body.trim(),
      pairing: form.pairing.trim(),
    };

    setEntries((current) => [entry, ...current]);
    setForm(emptyForm);
  }

  function remove(id: string) {
    setEntries((current) => current.filter((entry) => entry.id !== id));
  }

  const fields: { key: keyof typeof emptyForm; label: string; required?: boolean }[] = [
    { key: "beer", label: "Что пробовали", required: true },
    { key: "brewery", label: "Пивоварня или бренд" },
    { key: "style", label: "Стиль, если знаете" },
    { key: "color", label: "Цвет и пена" },
    { key: "aroma", label: "Запах" },
    { key: "taste", label: "Вкус" },
    { key: "body", label: "Тело" },
    { key: "pairing", label: "С чем бы съел" },
  ];

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <form
        onSubmit={onSubmit}
        className="rounded-3xl border border-line bg-foam p-6 md:p-8"
      >
        <h2 className="font-display text-3xl">Новая запись</h2>
        <p className="mt-2 text-sm leading-6 text-ink-soft">
          Пять строк с урока дегустации плюс имя бутылки. Записи остаются в этом
          браузере.
        </p>
        <div className="mt-6 grid gap-4">
          {fields.map((field) => (
            <label key={field.key} className="block">
              <span className="text-xs tracking-wide text-copper uppercase">
                {field.label}
                {field.required ? " *" : ""}
              </span>
              {field.key === "aroma" || field.key === "taste" || field.key === "pairing" ? (
                <textarea
                  required={field.required}
                  rows={2}
                  value={form[field.key]}
                  onChange={(event) => update(field.key, event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm outline-none ring-copper/30 focus:ring-2"
                />
              ) : (
                <input
                  required={field.required}
                  value={form[field.key]}
                  onChange={(event) => update(field.key, event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm outline-none ring-copper/30 focus:ring-2"
                />
              )}
            </label>
          ))}
        </div>
        <button
          type="submit"
          className="mt-6 rounded-full bg-stout px-5 py-3 text-sm text-foam"
        >
          Сохранить в дневник
        </button>
      </form>

      <section>
        <h2 className="font-display text-3xl">Записи</h2>
        <p className="mt-2 text-sm text-ink-soft">
          {ready
            ? entries.length
              ? `${entries.length} ${entries.length === 1 ? "запись" : entries.length < 5 ? "записи" : "записей"}`
              : "Пока пусто — первая дегустация станет началом дневника."
            : "Загружаем…"}
        </p>
        <div className="mt-6 space-y-4">
          {entries.map((entry) => (
            <article
              key={entry.id}
              className="rounded-3xl border border-line bg-foam p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs tracking-wide text-copper uppercase">
                    {new Date(entry.createdAt).toLocaleDateString("ru-RU")}
                    {entry.style ? ` · ${entry.style}` : ""}
                  </p>
                  <h3 className="mt-1 font-display text-2xl">{entry.beer}</h3>
                  {entry.brewery ? (
                    <p className="text-sm text-ink-soft">{entry.brewery}</p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => remove(entry.id)}
                  className="text-sm text-ink-soft hover:text-copper"
                >
                  Удалить
                </button>
              </div>
              <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  ["Цвет", entry.color],
                  ["Запах", entry.aroma],
                  ["Вкус", entry.taste],
                  ["Тело", entry.body],
                  ["С чем бы съел", entry.pairing],
                ]
                  .filter(([, value]) => value)
                  .map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-xs tracking-wide text-copper uppercase">
                        {label}
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-ink-soft">
                        {value}
                      </dd>
                    </div>
                  ))}
              </dl>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
