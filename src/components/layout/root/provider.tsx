import RootDesignLayout from "./design";
import LocaleProvider from "@/components/provider/locale";
import ThemeProvider from "@/components/provider/theme";
import { IPageChildren } from "@/types";

export default function RootProviderLayout(props: Readonly<IPageChildren>) {
  const { children } = props;
  return (
    <LocaleProvider>
      <ThemeProvider>
        <RootDesignLayout>{children}</RootDesignLayout>
      </ThemeProvider>
    </LocaleProvider>
  );
}
