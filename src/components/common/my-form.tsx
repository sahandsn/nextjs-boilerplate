"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginFormSchemaGenerator } from "@/schemas";

import { useTranslations } from "next-intl";

export default function MyForm() {
  const t = useTranslations("MyForm");
  const tr = useTranslations("LoginFormSchema");
  const loginFormSchema = loginFormSchemaGenerator(tr);
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("item-1-title")}</FormLabel>
              <FormControl>
                <Input placeholder={t("item-1-placeholder")} {...field} />
              </FormControl>
              <FormDescription>{t("item-1-description")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("item-2-title")}</FormLabel>
              <FormControl>
                <Input placeholder={t("item-2-placeholder")} {...field} />
              </FormControl>
              <FormDescription>{t("item-2-description")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{t("btn-action")}</Button>
      </form>
    </Form>
  );
}
