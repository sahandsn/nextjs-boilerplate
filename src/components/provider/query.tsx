"use client";

import { IPageChildren } from "@/types/general";
import { getQueryClient } from "@/query-client";
import { QueryClientProvider } from "@tanstack/react-query";

export default function QueryProvider(props: Readonly<IPageChildren>) {
  const { children } = props;
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
