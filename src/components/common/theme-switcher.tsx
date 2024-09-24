"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

interface ITheme {
  title: string;
  value: string;
}

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const t = useTranslations("ThemeSwitcher");
  const options: ITheme[] = [
    { title: t("Light"), value: "light" },
    { title: t("Dark"), value: "dark" },
    { title: t("System"), value: "system" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t("screen-reader-title")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={theme ?? "system"}>
          {options.map((option) => (
            <DropdownMenuRadioItem
              onClick={() => setTheme(option.value)}
              key={option.value}
              value={option.value}
            >
              {option.title}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
