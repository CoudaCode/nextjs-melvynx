import { PageLayout } from "@/layout";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default async function Layout(
  props: PropsWithChildren<{ params: Promise<{ videoId: string }> }>
) {
  const params = await props.params;
  return (
    <div>
      <PageLayout>
        <header className="border-b -mx-4 px-4 pb-2">
          <Link href="/formations" className="font-bold">
            /formations/{params.videoId}
          </Link>
        </header>
        {props.children}
      </PageLayout>
    </div>
  );
}
