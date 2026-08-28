import type { CSSProperties } from "react";
import type { ImageProps } from "next/image";
import { publicPath } from "@/lib/publicPath";

type AppImageProps = Omit<ImageProps, "src" | "alt" | "loader" | "quality"> & {
  src: string;
  alt: string;
};

export function AppImage({
  src,
  alt,
  className,
  width,
  height,
  fill,
  priority,
  style,
}: AppImageProps) {
  const resolved = publicPath(src);
  const imgStyle: CSSProperties | undefined = fill
    ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        ...style,
      }
    : style;

  return (
    // Static GitHub Pages has no image optimizer; keep the URL we computed.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolved}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      style={imgStyle}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
    />
  );
}
