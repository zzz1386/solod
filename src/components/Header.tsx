import Link from "next/link";
import { course } from "@/data/course";

const nav = [
  { href: "/program", label: "Программа" },
  { href: "/modules", label: "Модули" },
  { href: "/how-to", label: "Как учиться" },
  { href: "/exam", label: "Экзамен" },
  { href: "/journal", label: "Дневник" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-display text-xl tracking-tight text-ink">
            Солод
          </span>
          <span className="hidden text-sm text-ink-soft sm:inline">
            {course.title}
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink-soft transition-colors hover:text-copper"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
