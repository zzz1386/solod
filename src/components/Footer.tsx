import Link from "next/link";
import { course } from "@/data/course";

export function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p>
          {course.title} · {course.audience} · 24 урока
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link href="/how-to" className="hover:text-copper">
            Как учиться
          </Link>
          <Link href="/program" className="hover:text-copper">
            Все уроки
          </Link>
          <a
            href="https://www.donationalerts.com/r/zzz1386"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-stout px-4 py-2 text-foam transition-colors hover:bg-copper"
          >
            Поблагодарить автора
          </a>
        </div>
      </div>
    </footer>
  );
}
