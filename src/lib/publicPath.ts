/** Prefix public assets for the GitHub Pages project URL. Local `next dev` stays at `/`. */
export function publicPath(src: string) {
  if (
    !src.startsWith("/") ||
    src.startsWith("//") ||
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:")
  ) {
    return src;
  }

  const base = process.env.NODE_ENV === "development" ? "" : "/solod";
  if (!base || src === base || src.startsWith(`${base}/`)) {
    return src;
  }

  return `${base}${src}`;
}
