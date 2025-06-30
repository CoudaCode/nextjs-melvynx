import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Page(props: {
  params: Promise<{ videoId: string; lessonId: string }>;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-8 w-full" />
        </CardTitle>
      </CardHeader>

      <CardFooter>
        <Skeleton className="h-8 w-16" />
      </CardFooter>
    </Card>
  );
}
