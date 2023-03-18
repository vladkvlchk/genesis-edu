export interface AboutType {
  id: String;
  title: String;
  tags: String[];
  launchDate: String;
  status: String;
  description: String;
  duration: number;
  previewImageLink: string;
  rating: number;
  meta: {
    slug: string;
    skills: string[];
    courseVideoPreview: {
      link: string;
      duration: number;
      previewImageLink: string;
    };
  };
}

export interface LessonType {
  duration: number;
  id: string;
  link: string;
  meta: any;
  order: Number;
  previewImageLink: String;
  status: "locked" | "unlocked";
  title: String;
  type: String;
}
