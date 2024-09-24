import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { IPageChildren } from "@/types";

export default async function LocaleProvider({
  children,
}: Readonly<IPageChildren>) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
