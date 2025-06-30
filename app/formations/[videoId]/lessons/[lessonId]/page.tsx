import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { videos } from "@app/formations/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ videoId: string; lessonId: string }>;
}) {
  const params = await props.params;
  const video = videos.find((video) => video.id === params.videoId);
  const lesson = video?.lessons.find((lesson) => lesson.id === params.lessonId);
  await new Promise((r) => setTimeout(r, 3000));

  if (!video) {
    throw new Error("Video not found");
    return <div>Video not found</div>;
  }
  if (!lesson) {
    notFound();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{lesson.title}</CardTitle>
        <CardDescription>{lesson.description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Link
          href={`/formations/${video.id}`}
          className="text-indigo-500 underline"
        >
          Back
        </Link>
      </CardFooter>
    </Card>
  );
}
