import { defineRouting, Pathnames } from "next-intl/routing";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import routes from "@/routes";

type TDirection = "rtl" | "ltr";
interface ILocale {
  key: string;
  title: string;
  direction: TDirection;
}

export const ENGLISH: ILocale = {
  key: "en",
  title: "English",
  direction: "ltr",
} as const;
export const GERMAN: ILocale = {
  key: "de",
  title: "Deutsche",
  direction: "ltr",
} as const;
export const FARSI: ILocale = {
  key: "fa",
  title: "فارسی",
  direction: "rtl",
} as const;

export const getDirection: (locale: string) => TDirection = (
  locale: string,
) => {
  const lang = locales.find((lang) => lang.key === locale);
  if (lang) {
    return lang.direction;
  } else {
    return "ltr";
  }
};

export const locales = [ENGLISH, GERMAN, FARSI] as const;
const localeKeys = locales.map((locale) => locale.key);
export const defaultLocale = ENGLISH;
export const pathnames = {
  [routes.home]: routes.home,
  [routes["my-page"]]: {
    en: routes["my-page"],
    de: "/meine-seite",
    fa: "/صفحه-من",
  },
} satisfies Pathnames<typeof localeKeys>;

export const routing = defineRouting({
  locales: localeKeys,
  defaultLocale: defaultLocale.key,
  pathnames: pathnames as typeof pathnames & Record<string & {}, string>,
});

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation(routing);
