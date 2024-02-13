export interface Project {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  gitUrl: string;
  previewUrl: string;
  tag: string[];
  stack: string[];
}

export const projectData: Project[] = [
  {
    id: 1,
    title: "Amazone Clone",
    description:
      "A comprehensive e-commerce platform built with Next.js and Tailwind CSS, mirroring the functionality and design of the renowned Amazon website. Features include user authentication with NextAuth.js, state management with React Context and Reducers. Explore a familiar shopping experience with this fully responsive web application.",
    imgUrl: "/images/amazone-clone.png",
    gitUrl: "https://github.com/christienMD/Amazone-clone",
    previewUrl: "https://amazone-clone-mdchristien.vercel.app/",
    tag: ["All", "Web"],
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Next Js",
      "React Context",
      "Reducers",
      "Axios",
      "Tailwind CSS",
      "NextAuth.js",
      "Stripe",
    ],
  },
  {
    id: 2,
    title: "Issue Tracker",
    description:
      "This is a Beautifull Full-stack Production-grade web app for tracking issues. This web app includes feature such as: Dashboard, Charts, Sorting, Filtering, Pagination, Skeletons , CRUD , Forms, Caching, Authentication and more.",
    imgUrl: "/images/issueTracker-crop.png",
    gitUrl: "https://github.com/christienMD/issue-tracker",
    previewUrl: "https://issue-tracker-md-christien.vercel.app/",
    tag: ["All", "Web"],
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Next Js",
      "React Query",
      "Tailwind CSS",
      "Radix UI",
      "MySQL",
      "Prisma",
      "NextAuth.js",
    ],
  },

  {
    id: 3,
    title: "Game-Hub",
    description:
      "This is a beautiful Video Game Discovery web app for searching and discovering games, It is a mini version of the Rawg website , popular Video Game Discovery Platform.",
    imgUrl: "/images/gameHub-small.png",
    gitUrl: "https://github.com/christienMD/game-hub",
    previewUrl: "https://mdchristien-gamehub.vercel.app/",
    tag: ["All", "Web"],
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React Js",
      "Zustand",
      "Chakra UI",
      "React Query",
    ],
  },
  {
    id: 4,
    title: "mdchristien Cloud Hosting",
    description:
      "This is a Bueatiful , Responsive and Blazingly Fast Website for a cloud hosting company- Cloud Hosting for Pros.",
    imgUrl: "/images/online-hosting.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/christienMD/mdchristien",
    previewUrl: "https://mdchristien.netlify.app/",
    stack: ["HTML5", "CSS3", "JavaScript"],
  },
];

// Dashboard,Charts,Sorting,Filtering,Caching,Pagination,Skeletons,CRUD,Forms,Authentication and more
