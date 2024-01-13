
export interface Project {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  gitUrl: string;
  previewUrl: string;
  tag: string[];
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "mdchristien Cloud Hosting",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eligendi repudiandae ipsum at doloribus sapiente placeat ex necessitatibus iusto",
    imgUrl: "/images/online-hosting.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/christienMD/mdchristien",
    previewUrl: "https://mdchristien.netlify.app/",
  },
  {
    id: 2,
    title: "Game-Hub",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eligendi repudiandae ipsum at doloribus sapiente placeat ex necessitatibus iusto",
    imgUrl: "/images/gameHub-small.png",
    gitUrl: "https://github.com/christienMD/game-hub",
    previewUrl: "https://mdchristien-gamehub.vercel.app/",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Issue Tracker",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eligendi repudiandae ipsum at doloribus sapiente placeat ex necessitatibus iusto",
    imgUrl: "/images/issueTracker-crop.png",
    gitUrl: "https://github.com/christienMD/issue-tracker",
    previewUrl: "https://issue-tracker-md-christien.vercel.app/",
    tag: ["All", "Web"],
  },
];
