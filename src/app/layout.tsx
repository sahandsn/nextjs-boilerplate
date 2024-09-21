import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { logo, DESCRIPTION, KEYWORDS, TITLE, TITLE_TEMPLATE } from "@/assets";
import { env } from "@/env/client";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  applicationName: TITLE,
  title: {
    default: TITLE,
    template: TITLE_TEMPLATE,
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  icons: {
    icon: logo.src,
    apple: logo.src,
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
    description: DESCRIPTION,
    siteName: TITLE,
    images: [
      {
        url: `${env.NEXT_PUBLIC_ROOT_URL}/logo.ico`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: {
      default: TITLE,
      template: TITLE_TEMPLATE,
    },
    description: DESCRIPTION,
    images: `${env.NEXT_PUBLIC_ROOT_URL}/logo.ico`,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
