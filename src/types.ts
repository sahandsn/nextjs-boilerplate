import { routing } from "@/i18n/routing";
import { ReactNode } from "react";
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

// Utility type to get the type at a given path
type MessageTypeAtPath<
  T,
  P extends string,
> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? MessageTypeAtPath<T[K], Rest>
    : never
  : P extends keyof T
    ? T[P]
    : never;

type FullKey<N extends string, K extends string> = N extends ""
  ? K
  : `${N}.${K}`;

type MessageKey<N extends string> = ExtractKeysUnderNamespace<IntlMessages, N> &
  string;

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
  ): ReactNode;
  markup(
    key: MessageKey<N>,
    values?: MarkupTranslationValues,
    formats?: Partial<Formats>,
  ): string;
  raw<K extends MessageKey<N>>(
    key: K,
  ): MessageTypeAtPath<IntlMessages, FullKey<N, K>>;
};
