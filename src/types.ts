import { routing } from "@/i18n/routing";

export interface IPage {
  params: { locale: string };
}

export interface ILayout extends IPage {
  children: React.ReactNode;
}

export type TInternalLink = keyof typeof routing.pathnames;
