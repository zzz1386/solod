import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "От солода к стилю — курс о пиве",
    template: "%s · От солода к стилю",
  },
  description:
    "Курс для российской аудитории: история пива, сорта, стили, советские ГОСТы и дегустация. 24 урока, 8 недель.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,164,65,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(196,92,26,0.12),transparent_28%)]" />
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pb-28">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
