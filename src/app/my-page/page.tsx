import Link from "next/link";
import routes from "@/routes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Page",
};

export default function MyPage() {
  return (
    <main>
      <p>this is my page</p>
      <Link href={routes.home}>Go Back to Main Page</Link>
    </main>
  );
}
