"use client";

import { IPageChildren } from "@/types/general";
import { BearStoreProvider } from "@/store/bears/provider";

export default function StoreProvider(props: Readonly<IPageChildren>) {
  const { children } = props;

  return <BearStoreProvider>{children}</BearStoreProvider>;
}
