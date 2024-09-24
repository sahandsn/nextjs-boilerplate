import { IPageChildren } from "@/types";
import LocaleSwitcher from "@/components/common/locale-switcher";
import ThemeSwitcher from "@/components/common/theme-switcher";

export default function RootProviderLayout(props: Readonly<IPageChildren>) {
  const { children } = props;
  return (
    <div className="relative p-10">
      <div className="relative">
        <div className="absolute right-0 top-0 flex items-center gap-5">
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
      </div>

      {children}
    </div>
  );
}
