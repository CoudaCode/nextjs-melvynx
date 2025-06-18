import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageLayout } from "@/layout";
import { VIDEOS } from "@app/formations/data";
import Link from "next/link";
export default async function Page(props: {
  params: Promise<{
    videoId: string;
    lessonId: string;
  }>;
}) {
  const params = await props.params;
  const { videoId } = params;
  const video = VIDEOS.find((video) => video.id === videoId);

  if (!video) return <p>Video not found</p>;

  return (
    <PageLayout>
      <Card>
        <CardHeader>
          <CardTitle>{video.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <pre>{JSON.stringify(video, null, 2)}</pre>
        </CardContent>
        <CardFooter>
          <Link href="/formations" className="text-indigo-500 underline">
            back
          </Link>
        </CardFooter>
      </Card>
    </PageLayout>
  );
}
