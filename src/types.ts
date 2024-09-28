import { routing } from "@/i18n/routing";
import { ReactElement, ReactNodeArray } from "react";
import {
  Formats,
  TranslationValues,
  MarkupTranslationValues,
  RichTranslationValues,
} from "next-intl";

export interface IPageParams {
  params: { locale: string };
}
export interface IPageChildren {
  children: React.ReactNode;
}

export type TLayout = IPageParams & IPageChildren;

export type TInternalLink = keyof typeof routing.pathnames;

// Utility type to extract keys under a given namespace
type ExtractKeysUnderNamespace<
  T,
  N extends string,
> = N extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? ExtractKeysUnderNamespace<T[K], Rest>
    : never
  : N extends keyof T
    ? T[N] extends object
      ? keyof T[N] & string
      : never
    : never;

export type TranslateFn<N extends string> = {
  (
    key: MessageKey<N>,
    values?: TranslationValues,
    formats?: Partial<Formats>,
  ): string;
  rich(
    key: MessageKey<N>,
    values?: RichTranslationValues,
    formats?: Partial<Formats>,
  ): string | ReactElement | ReactNodeArray;
  markup(
    key: MessageKey<N>,
    values?: MarkupTranslationValues,
    formats?: Partial<Formats>,
  ): string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  raw(key: MessageKey<N>): any;
};

// Helper type to get valid keys under the namespace N
type MessageKey<N extends string> = ExtractKeysUnderNamespace<IntlMessages, N>;
