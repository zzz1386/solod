import Link from "next/link";
import { course } from "@/data/course";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p>
          {course.title} · {course.audience} · материалы курса в разработке
        </p>
        <p>
          <Link href="/how-to" className="hover:text-copper">
            Как учиться
          </Link>
          <span className="mx-2">·</span>
          <Link href="/program" className="hover:text-copper">
            Все уроки
          </Link>
        </p>
      </div>
    </footer>
  );
}
