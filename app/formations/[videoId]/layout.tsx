import Link from "next/link";
import { PropsWithChildren } from "react";
import { videos } from "../data";

export default async function Layout(
  props: PropsWithChildren<{ params: Promise<{ videoId: string }> }>
) {
  const params = await props.params;
  const video = videos.find((video) => video.id === params.videoId);

  if (!video) {
    throw new Error("Video not found");
    return <div>Video not found</div>;
  }

  return (
    <div>
      <header className="border-b -mx-4 item-center gap-2 px-4 pb- mb-4">
        <Link href="/formations" className="font-bold">
          /formations/{params.videoId}
        </Link>

        {video.lessons.map((l) => (
          <Link
            className="text-xs"
            href={`/formations/${params.videoId}/lessons/${l.id}`}
            key={l.id}
          >
            {l.title}
          </Link>
        ))}
      </header>
      {props.children}
    </div>
  );
}
