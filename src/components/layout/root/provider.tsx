import RootDesignLayout from "./design";
import LocaleProvider from "@/components/provider/locale";
import ThemeProvider from "@/components/provider/theme";
import QueryProvider from "@/components/provider/query";
import StoreProvider from "@/components/provider/store";
import { IPageChildren } from "@/types/general";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function RootProviderLayout(props: Readonly<IPageChildren>) {
  const { children } = props;
  return (
    <QueryProvider>
      <LocaleProvider>
        <ThemeProvider>
          <RootDesignLayout>
            <StoreProvider>{children}</StoreProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </RootDesignLayout>
        </ThemeProvider>
      </LocaleProvider>
    </QueryProvider>
  );
}
