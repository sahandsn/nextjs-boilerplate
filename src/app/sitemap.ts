import type { MetadataRoute } from "next";
import paths from "@/routes";
import { env } from "@/env/client";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap = Object.keys(paths).map((route) => {
    const path = paths[route as keyof typeof paths];
    return {
      url: `${env.NEXT_PUBLIC_ROOT_URL}${path}`,
      lastModified: new Date(),
      images: [`${env.NEXT_PUBLIC_ROOT_URL}/logo.ico`],
    };
  });

  return sitemap;
}
