import { TranslationFn } from "./types/translation-fn";

const TITLE = "Create Next App";
const TITLE_SHORT = "CNA";
const TITLE_TEMPLATE = `%s - ${TITLE_SHORT}`;

import icoLogo from "#/logo.ico";
import imgLogo from "#/logo.png";
import imgHomePageScreenshot from "#/home-page-screenshot.png";
import imgMyPageScreenshot from "#/my-page-screenshot.png";

const imgObjLogo = (t: TranslationFn<"Images.Logo">) => ({
  icoLogo: { ...icoLogo, alt: t("full") },
  imgLogo: { ...imgLogo, alt: t("full") },
});

const pwaScreenshots = (t: TranslationFn<"Images.PWA-screenshots">) => ({
  imgHomePageScreenshot: { ...imgHomePageScreenshot, alt: t("home") },
  imgMyPageScreenshot: { ...imgMyPageScreenshot, alt: t("myPage") },
});

export { TITLE, TITLE_SHORT, TITLE_TEMPLATE, imgObjLogo, pwaScreenshots };
