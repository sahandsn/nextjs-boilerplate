import {
  TITLE,
  DESCRIPTION,
  imgLogo,
  TITLE_SHORT,
  imgHomePageScreenshot,
  imgMyPageScreenshot,
} from "@/assets";

export default function manifest() {
  return {
    short_name: TITLE_SHORT,
    name: TITLE,
    description: DESCRIPTION,
    icons: [
      {
        src: imgLogo.src,
        sizes: `${imgLogo.width}x${imgLogo.height}`,
        type: "image/png",
      },
    ],
    theme_color: "#FFFFFF",
    background_color: "#FFFFFF",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    id: "/",
    screenshots: [
      {
        src: imgHomePageScreenshot.src,
        type: "image/png",
        sizes: `${imgHomePageScreenshot.width}x${imgHomePageScreenshot.height}`,
        form_factor: "wide",
      },
      {
        src: imgMyPageScreenshot.src,
        type: "image/png",
        sizes: `${imgMyPageScreenshot.width}x${imgMyPageScreenshot.height}`,
      },
    ],
  };
}
