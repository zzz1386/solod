export function FactBlock({ children }: { children: React.ReactNode }) {
  return (
    <aside className="rounded-2xl border border-malt/40 bg-malt/15 p-5">
      <p className="text-xs tracking-[0.18em] text-copper uppercase">
        Интересный факт
      </p>
      <p className="mt-2 font-display text-xl leading-snug">{children}</p>
    </aside>
  );
}
