import { ReactNode } from "react";
import {
  Formats,
  TranslationValues,
  MarkupTranslationValues,
  RichTranslationValues,
} from "next-intl";

// Utility type to extract keys under a given namespace.
// This type recursively traverses the `IntlMessages` type `T` based on the namespace `N`.
// It returns the keys available under the specified namespace.
type ExtractKeysUnderNamespace<
  T, // The type representing your messages, e.g., `IntlMessages`.
  N extends string, // The namespace path, e.g., "Schemas.LoginForm".
> =
  // Check if the namespace `N` includes a dot, indicating nested namespaces.
  N extends `${infer K}.${infer Rest}`
    ? // If so, `K` is the first segment of the namespace.
      K extends keyof T
      ? // If `K` is a key of `T`, recurse into `T[K]` with the rest of the namespace.
        ExtractKeysUnderNamespace<T[K], Rest>
      : // If `K` is not a key of `T`, return `never` (invalid namespace).
        never
    : // If `N` does not include a dot (it's a single segment).
      N extends keyof T
      ? // If `N` is a key of `T`, check if `T[N]` is an object.
        T[N] extends object
        ? // If `T[N]` is an object, return its keys as strings.
          keyof T[N] & string
        : // If `T[N]` is not an object (no further nesting), return `never`.
          never
      : // If `N` is not a key of `T`, return `never`.
        never;

// Utility type to get the type at a given path.
// It recursively navigates the `IntlMessages` type `T` based on the path `P`.
// Returns the type of the message at the specified path.
type MessageTypeAtPath<
  T, // The type representing your messages, e.g., `IntlMessages`.
  P extends string, // The path to the message, e.g., "Schemas.LoginForm.username-required".
> =
  // Check if the path `P` includes a dot, indicating nested properties.
  P extends `${infer K}.${infer Rest}`
    ? // If so, `K` is the first segment of the path.
      K extends keyof T
      ? // If `K` is a key of `T`, recurse into `T[K]` with the rest of the path.
        MessageTypeAtPath<T[K], Rest>
      : // If `K` is not a key of `T`, return `never` (invalid path).
        never
    : // If `P` does not include a dot (it's a single segment).
      P extends keyof T
      ? // If `P` is a key of `T`, return its type.
        T[P]
      : // If `P` is not a key of `T`, return `never`.
        never;

// Utility type to build the full key path by combining the namespace and key.
// If the namespace is empty, it returns the key as is.
// Otherwise, it concatenates the namespace and key with a dot.
type FullKey<
  N extends string, // Namespace, e.g., "Schemas.LoginForm".
  K extends string, // Key within the namespace, e.g., "username-required".
> = N extends ""
  ? K // If namespace is empty, full key is just the key `K`.
  : `${N}.${K}`; // Otherwise, full key is `Namespace.Key`.

// Utility type to get the message keys under a namespace.
// It uses `ExtractKeysUnderNamespace` to obtain valid keys and ensures they are strings.
type MessageKey<N extends string> = ExtractKeysUnderNamespace<IntlMessages, N> &
  string;

// Utility type to extract all possible namespace paths from `IntlMessages`.
// It recursively builds a union of all valid namespace strings.
type NamespacePaths<
  T, // The type representing your messages, e.g., `IntlMessages`.
  P extends string = "", // The accumulated path (defaults to empty string).
> = T extends object
  ? {
      [K in keyof T]: T[K] extends object // Iterate over each key `K` in `T`.
        ? // If `T[K]` is an object (has nested properties).
          P extends ""
          ? // If the accumulated path `P` is empty, start building paths.
            | K // Include the current key `K` as a possible namespace.
              | NamespacePaths<T[K], K & string> // Recurse into `T[K]`, updating path to `K`.
          : // If `P` is not empty, continue building paths.
            | `${P}.${K & string}` // Include the concatenated path as a namespace.
              | NamespacePaths<T[K], `${P}.${K & string}`> // Recurse into `T[K]`, updating path.
        : // If `T[K]` is not an object (leaf node).
          P extends ""
          ? // If `P` is empty, include the key `K` as a namespace.
            K
          : // If `P` is not empty, include the accumulated path `P`.
            P;
    }[keyof T] // Collect all namespace paths into a union type.
  : // If `T` is not an object (shouldn't happen), return `never`.
    never;

// Type representing all possible namespaces extracted from `IntlMessages`.
// This will be a union of strings like "Schemas", "Schemas.LoginForm", etc.
type AllNamespaces = NamespacePaths<IntlMessages>;

// The main type representing the translation function.
// It constrains the namespace `N` to be one of the valid `AllNamespaces`.
export type TranslationFn<N extends AllNamespaces> = {
  (
    key: MessageKey<N>, // The key to translate, constrained to valid keys under namespace `N`.
    values?: TranslationValues, // Optional variables for interpolation in the translation string.
    formats?: Partial<Formats>, // Optional custom formats for date, time, numbers, etc.
  ): string; // Returns the translated string.

  rich(
    key: MessageKey<N>, // The key to translate.
    values?: RichTranslationValues, // Values that can include React elements for rich text.
    formats?: Partial<Formats>, // Optional custom formats.
  ): ReactNode; // Returns a ReactNode (string, element, or array of nodes).

  markup(
    key: MessageKey<N>, // The key to translate.
    values?: MarkupTranslationValues, // Values that include markup (e.g., HTML strings).
    formats?: Partial<Formats>, // Optional custom formats.
  ): string; // Returns the translated string with markup.

  raw<K extends MessageKey<N>>(
    key: K, // The key to retrieve the raw message for.
  ): MessageTypeAtPath<IntlMessages, FullKey<N, K>>; // Returns the raw message type at the full key path.
};
