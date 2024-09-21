import { MetadataRoute } from "next";
import { TITLE, DESCRIPTION, logo, TITLE_SHORT } from "@/assets";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: TITLE_SHORT,
    name: TITLE,
    description: DESCRIPTION,
    icons: [
      {
        src: logo.src,
        sizes: "any",
        type: "image/ico",
      },
    ],
    theme_color: "#FFFFFF",
    background_color: "#FFFFFF",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
  };
}
