import issueTracker from "@/public/images/gameHub-small.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  gitUrl: string;
  previewUrl: string;
  tag?: { all: string; web: string };
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "mdchristien Cloud Hosting",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eligendi repudiandae ipsum at doloribus sapiente placeat ex necessitatibus iusto",
    imgUrl: "/images/online-hosting.png",
    tag: { all: "All", web: "Web" },
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Game-Hub",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eligendi repudiandae ipsum at doloribus sapiente placeat ex necessitatibus iusto",
    imgUrl: "/images/gameHub-small.png",
    gitUrl: "/",
    previewUrl: "/",
    tag: { all: "All", web: "Web" },
  },
  {
    id: 3,
    title: "Issue Tracker",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eligendi repudiandae ipsum at doloribus sapiente placeat ex necessitatibus iusto",
    imgUrl: "/images/issueTracker-crop.png",
    gitUrl: "/",
    previewUrl: "/",
    tag: { all: "All", web: "Web" },
  },
];
