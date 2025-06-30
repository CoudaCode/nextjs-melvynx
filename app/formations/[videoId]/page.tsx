import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { videos } from "../data";

export default async function Page(props: {
  params: Promise<{ videoId: string }>;
}) {
  const params = await props.params;
  const video = videos.find((video) => video.id === params.videoId);

  if (!video) {
    throw new Error("Video not found");
    return <div>Video not found</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{video?.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <ul className="list-disc list-inside">
          {video?.lessons.map((lesson) => (
            <li key={lesson.title}>
              <Link href={`/formations/${video.id}/lessons/${lesson.id}`}>
                {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Link href="/formations" className="text-indigo-500 underline">
          Back
        </Link>
      </CardFooter>
    </Card>
  );
}
