export interface Project {
  id?: string;
  title: string;
  role: string;
  date: string;
  category: "fullstack" | "data & ai" | "hybrid";
  description: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}
