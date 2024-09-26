import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { icoLogo, TITLE, TITLE_TEMPLATE } from "@/assets";
import { env } from "@/env/client";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { routing, getDirection } from "@/i18n/routing";
import { TLayout, IPageParams } from "@/types";
import RootLayoutProviders from "@/components/layout/root/provider";
import linkPreviewMetadata from "@/metadata";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata(
  props: Readonly<IPageParams>,
): Promise<Metadata> {
  const {
    params: { locale },
  } = props;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const { openGraph, twitter, appleWebApp } = linkPreviewMetadata({
    description: t("description"),
    locale,
    title: TITLE,
    url: "/",
  });

  return {
    applicationName: TITLE,
    title: {
      default: TITLE,
      template: TITLE_TEMPLATE,
    },
    description: t("description"),
    keywords: t("keywords"),
    icons: {
      icon: icoLogo.src,
      apple: icoLogo.src,
    },
    alternates: {
      canonical: env.NEXT_PUBLIC_ROOT_URL,
    },
    openGraph,
    twitter,
    appleWebApp,
    formatDetection: {
      telephone: false,
    },
  };
}

export default async function RootLayout(props: Readonly<TLayout>) {
  const {
    children,
    params: { locale },
  } = props;
  unstable_setRequestLocale(locale);
  const direction = getDirection(locale);

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootLayoutProviders>{children}</RootLayoutProviders>
      </body>
    </html>
  );
}
