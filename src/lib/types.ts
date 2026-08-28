export type LessonStatus = "ready" | "outline";

export type LessonImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type LessonSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
  image?: LessonImage;
};

export type LessonContent = {
  hero: LessonImage;
  lead: string;
  sections: LessonSection[];
  factImage?: LessonImage;
  glossary: { term: string; definition: string }[];
  takeaways: string[];
};

export type Lesson = {
  number: number;
  slug: string;
  title: string;
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
  cover: {
    src: string;
    alt: string;
  };
  lessons: Lesson[];
};

export type Course = {
  title: string;
  tagline: string;
  duration: string;
  lessonCount: number;
  audience: string;
};
