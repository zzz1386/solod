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

  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!base || src === base || src.startsWith(`${base}/`)) {
    return src;
  }

  return `${base}${src}`;
}
