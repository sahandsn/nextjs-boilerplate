import { TITLE, TITLE_SHORT, imgObjLogo, pwaScreenshots } from "@/assets";
import { MetadataRoute } from "next";
import { getTranslations } from "next-intl/server";
import { defaultLocale } from "@/i18n/routing";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = defaultLocale.key;

  const t = await getTranslations({
    namespace: "Metadata",
    locale,
  });
  const tr = await getTranslations({
    namespace: "Images.Logo",
    locale,
  });
  const tra = await getTranslations({
    namespace: "Images.PWA-screenshots",
    locale,
  });
  const { imgLogo } = imgObjLogo(tr);
  const { imgHomePageScreenshot, imgMyPageScreenshot } = pwaScreenshots(tra);

  return {
    short_name: TITLE_SHORT,
    name: TITLE,
    description: t("description"),
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
      },
      {
        src: imgMyPageScreenshot.src,
        type: "image/png",
        sizes: `${imgMyPageScreenshot.width}x${imgMyPageScreenshot.height}`,
      },
    ],
  };
}
