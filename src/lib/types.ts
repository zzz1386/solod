export type LessonStatus = "ready" | "outline";

export type Lesson = {
  number: number;
  slug: string;
  title: string;
  duration: string;
  goal: string;
  topics: string[];
  fact: string;
  practice: string;
  status: LessonStatus;
};

export type Module = {
  slug: string;
  week: string;
  title: string;
  summary: string;
  lessons: Lesson[];
};

export type Course = {
  title: string;
  tagline: string;
  duration: string;
  lessonCount: number;
  audience: string;
};
