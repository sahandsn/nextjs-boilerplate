import { routing } from "@/i18n/routing";

export interface IPageParams {
  params: { locale: string };
}
export interface IPageChildren {
  children: React.ReactNode;
}

export type TLayout = IPageParams & IPageChildren;

export type TInternalLink = keyof typeof routing.pathnames;
