export interface Video {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
}

export const videos: Video[] = [
  {
    id: "video-1",
    title: "Fundamentals",
    lessons: [
      {
        id: "video-1-lesson-1",
        title: "Introduction to Next.js",
        description: "Learn how to build a Next.js app",
      },
      {
        id: "video-1-lesson-2",
        title: "Settings up a Next.js",
        description: "Step by step guide to setting up a Next.js app",
      },
    ],
  },

  {
    id: "video-2",
    title: "Server components + Prisma",
    lessons: [
      {
        id: "video-2-lesson-1",
        title: "Introduction to Next.js",
        description: "Learn how to build a Next.js app",
      },
      {
        id: "video-2-lesson-2",
        title: "Settings up a Next.js",
        description: "Step by step guide to setting up a Next.js app",
      },
    ],
  },

  {
    id: "video-3",
    title: "Server Function + Mutation",
    lessons: [
      {
        id: "video-3-lesson-1",
        title: "Introduction to Next.js",
        description: "Learn how to build a Next.js app",
      },
      {
        id: "video-3-lesson-2",
        title: "Settings up a Next.js",
        description: "Step by step guide to setting up a Next.js app",
      },
    ],
  },
];
