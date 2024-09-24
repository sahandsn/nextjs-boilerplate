"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Link, usePathname, locales, defaultLocale } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { getCookie } from "cookies-next";

export default function LocaleSwitcher() {
  const activeLocale = getCookie("NEXT_LOCALE");
  const pathname = usePathname();
  const t = useTranslations("LocaleSwitcher");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t("screen-reader-title")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={activeLocale ?? defaultLocale.key}>
          {locales.map((locale) => (
            <Link locale={locale.key} href={pathname} key={locale.title}>
              <DropdownMenuRadioItem value={locale.key}>
                {locale.title}
              </DropdownMenuRadioItem>
            </Link>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
