export type Lesson = {
  id: string;
  title: string;
  href: string;
  description: string;
};

export type Video = {
  id: string;
  title: string;
  lessons: Lesson[];
};

export const VIDEOS: Video[] = [
  {
    id: "video-1",
    title: "Fondamentals",
    lessons: [
      {
        id: "lesson-1-1",
        title: "Fondamentals Overview",
        href: "/formations/video-1/lesson-1-1",
        description: "This is a description",
      },
      {
        id: "lesson-1-2",
        title: "JSX & Components",
        href: "/formations/video-1/lesson-1-2",
        description: "This is a description",
      },
      {
        id: "lesson-1-3",
        title: "Props & State",
        href: "/formations/video-1/lesson-1-3",
        description: "This is a description",
      },
    ],
  },
  {
    id: "video-2",
    title: "Server Components + Prisma",
    lessons: [
      {
        id: "lesson-2-1",
        title: "Server Components + Prisma Intro",
        href: "/formations/video-2/lesson-2-1",
        description: "This is a description",
      },
      {
        id: "lesson-2-2",
        title: "Fetching Data with Prisma",
        href: "/formations/video-2/lesson-2-2",
        description: "This is a description",
      },
      {
        id: "lesson-2-3",
        title: "Server-side Rendering",
        href: "/formations/video-2/lesson-2-3",
        description: "This is a description",
      },
    ],
  },
  {
    id: "video-3",
    title: "Server Fonction + Mutation",
    lessons: [
      {
        id: "lesson-3-1",
        title: "Server Functions Overview",
        href: "/formations/video-3/lesson-3-1",
        description: "This is a description",
      },
      {
        id: "lesson-3-2",
        title: "Mutations with Server Functions",
        href: "/formations/video-3/lesson-3-2",
        description: "This is a description",
      },
      {
        id: "lesson-3-3",
        title: "Practical Mutation Example",
        href: "/formations/video-3/lesson-3-3",
        description: "This is a description",
      },
    ],
  },
];
