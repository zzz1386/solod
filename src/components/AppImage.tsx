import Image, { type ImageProps } from "next/image";
import { publicPath } from "@/lib/publicPath";

export function AppImage({ src, ...props }: ImageProps) {
  const resolved = typeof src === "string" ? publicPath(src) : src;
  return <Image src={resolved} {...props} />;
}
