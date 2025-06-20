import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { VIDEOS } from "../data";

export default async function Page(props: {
  params: Promise<{
    videoId: string;
  }>;
}) {
  const params = await props.params;
  const { videoId } = params;
  const video = VIDEOS.find((video) => video.id === videoId);

  if (!video) return <p>Video not found</p>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{video.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <pre>{JSON.stringify(video, null, 2)}</pre>
        <ul className="list-disc list-inside">
          {video?.lessons.map((lesson) => (
            <li key={lesson.title} className="text-indigo-500 underline">
              <Link href={`/formations/${video.id}/lessons/${lesson.id}`}>
                {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Link href="/formations" className="text-indigo-500 underline">
          back
        </Link>
      </CardFooter>
    </Card>
  );
}
