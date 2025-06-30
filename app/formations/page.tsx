import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { videos } from "./data";
export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Module 1</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {videos.map((video) => (
          <Link
            key={video.id}
            href={`/formations/${video.id}`}
            className="text-indigo-500 underline"
          >
            {video.title}
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
