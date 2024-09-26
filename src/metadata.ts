import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";
import { TITLE } from "@/assets";
import { TInternalLink } from "@/types";
import { env } from "./env/client";
import { AppleWebApp } from "next/dist/lib/metadata/types/extra-types";

const openGraph = ({
  locale,
  description,
  title,
  url,
}: {
  locale: string;
  title: string;
  description: string;
  url: TInternalLink;
}): OpenGraph => {
  return {
    type: "website",
    locale,
    url: `${env.NEXT_PUBLIC_ROOT_URL}${url}`,
    title,
    description,
    siteName: TITLE,
    images: `${env.NEXT_PUBLIC_ROOT_URL}/logo.png`,
  };
};

const twitter = ({
  description,
  title,
}: {
  title: string;
  description: string;
}): Twitter => {
  return {
    card: "summary",
    title,
    description,
    images: `${env.NEXT_PUBLIC_ROOT_URL}logo.png`,
  };
};

const appleWebApp = ({ title }: { title: string }): AppleWebApp => {
  return {
    capable: true,
    statusBarStyle: "default",
    title: title,
    startupImage: `${env.NEXT_PUBLIC_ROOT_URL}logo.png`,
  };
};

export default function linkPreviewMetadata({
  locale,
  description,
  title,
  url,
}: {
  locale: string;
  title: string;
  description: string;
  url: TInternalLink;
}): {
  twitter: Twitter;
  openGraph: OpenGraph;
  appleWebApp: AppleWebApp;
} {
  return {
    openGraph: openGraph({ locale, description, title, url }),
    twitter: twitter({ description, title }),
    appleWebApp: appleWebApp({ title }),
  };
}
