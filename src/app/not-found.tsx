import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="font-display text-5xl">Страница не найдена</h1>
      <p className="mt-4 text-ink-soft">
        Такого урока или раздела в курсе нет.
      </p>
      <Link href="/program" className="mt-8 inline-block text-copper">
        К программе
      </Link>
    </Container>
  );
}
