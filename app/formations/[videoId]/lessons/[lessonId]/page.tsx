import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VIDEOS } from "@app/formations/data";
import Link from "next/link";
export default async function Page(props: {
  params: Promise<{
    videoId: string;
    lessonId: string;
  }>;
}) {
  const params = await props.params;
  const { videoId, lessonId } = params;
  const video = VIDEOS.find((video) => video.id === videoId);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (!video) return <p>Video not found</p>;

  const lession = video.lessons.find((lesson) => lesson.id === lessonId);

  if (!lession) {
    throw new Error("Lesson not found");
    // return <p>Lesson not found</p>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{lession.title}</CardTitle>
        <CardDescription>{lession.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4"></CardContent>
      <CardFooter>
        <Link href={lession.href} className="text-indigo-500 underline">
          back
        </Link>
      </CardFooter>
    </Card>
  );
}
