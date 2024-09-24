import { defineRouting, Pathnames } from "next-intl/routing";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import routes from "@/routes";

export const ENGLISH = {
  key: "en",
  title: "English",
} as const;
export const GERMAN = {
  key: "de",
  title: "Deutsche",
} as const;
export const FARSI = {
  key: "fa",
  title: "فارسی",
} as const;

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
