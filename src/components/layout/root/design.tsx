"use client";

import { IPageChildren } from "@/types/general";
import LocaleSwitcher from "@/components/common/locale-switcher";
import ThemeSwitcher from "@/components/common/theme-switcher";
import { DirectionProvider } from "@radix-ui/react-direction";
import { useLocale } from "next-intl";
import { getDirection } from "@/i18n/routing";

export default function RootProviderLayout(props: Readonly<IPageChildren>) {
  const { children } = props;
  const locale = useLocale();
  const direction = getDirection(locale);
  return (
    <DirectionProvider dir={direction}>
      <div className="relative p-10">
        <div className="relative">
          <div className="absolute top-0 flex items-center gap-5 ltr:right-0 rtl:left-0">
            <LocaleSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
        {children}
      </div>
    </DirectionProvider>
  );
}
