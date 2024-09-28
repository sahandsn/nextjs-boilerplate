import { Link } from "@/i18n/routing";
import routes from "@/routes";
import type { Metadata } from "next";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import { IPageParams } from "@/types/general";
import { useTranslations } from "next-intl";
import linkPreviewMetadata from "@/metadata";
import MyForm from "@/components/common/my-form";

export async function generateMetadata(
  props: Readonly<IPageParams>,
): Promise<Metadata> {
  const {
    params: { locale },
  } = props;
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Titles" });
  const { appleWebApp, openGraph, twitter } = linkPreviewMetadata({
    description: t("myPage-description"),
    locale,
    title: t("myPage"),
    url: "/my-page",
  });
  return {
    title: t("myPage"),
    description: t("myPage-description"),
    appleWebApp,
    openGraph,
    twitter,
  };
}

export default function MyPage(props: Readonly<IPageParams>) {
  const {
    params: { locale },
  } = props;
  unstable_setRequestLocale(locale);
  const t = useTranslations("Titles");
  const tr = useTranslations("MyPage");

  return (
    <main className="flex flex-col gap-10">
      <p>{t("myPage")}</p>
      <Link href={routes.home}>{tr("btn-back")}</Link>
      <MyForm />
    </main>
  );
}
