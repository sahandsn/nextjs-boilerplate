import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { icoLogo, TITLE, TITLE_TEMPLATE } from "@/assets";
import { env } from "@/env/client";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { TLayout, IPageParams } from "@/types";
import RootLayoutProviders from "@/components/layout/root/provider";

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
    openGraph: {
      type: "website",
      locale: "en",
      url: env.NEXT_PUBLIC_ROOT_URL,
      title: {
        default: TITLE,
        template: TITLE_TEMPLATE,
      },
      description: t("description"),
      siteName: TITLE,
      images: [
        {
          url: `${env.NEXT_PUBLIC_ROOT_URL}/logo.png`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: {
        default: TITLE,
        template: TITLE_TEMPLATE,
      },
      description: t("description"),
      images: `${env.NEXT_PUBLIC_ROOT_URL}/logo.png`,
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: TITLE,
    },
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
  return (
    <html lang={locale} dir="ltr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootLayoutProviders>{children}</RootLayoutProviders>
      </body>
    </html>
  );
}
