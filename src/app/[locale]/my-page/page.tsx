import { Link } from "@/i18n/routing";
import routes from "@/routes";
import type { Metadata } from "next";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import { IPageParams } from "@/types";
import { useTranslations } from "next-intl";

export async function generateMetadata(
  props: Readonly<IPageParams>,
): Promise<Metadata> {
  const {
    params: { locale },
  } = props;
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Titles" });
  return {
    title: t("myPage"),
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
    <main>
      <p>{t("myPage")}</p>
      <Link href={routes.home}>{tr("btn-back")}</Link>
    </main>
  );
}
