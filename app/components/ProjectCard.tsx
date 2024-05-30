import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Project } from "../projectData";
import Stacks from "./Stacks";
import { Button } from "../MaterialTailwind";
import NewBadge from "./Flag";

interface Props {
  title: string;
  description: string;
  imgUrl: string;
  gitUrl: string;
  previewUrl: string;
  stack: string[];
  isNew: boolean;
}

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  stack,
  isNew,
}: Props) => {
  return (
    <div className="flex flex-col h-full">
      <div
        className="h-56 md:h-56 rounded-txl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-10 w-10 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link tooltip"
            data-tip="view code"
          >
            <CodeBracketIcon className="h-7 w-7 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-10 w-10 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link tooltip"
            data-tip="view live"
          >
            <EyeIcon className="h-7 w-7 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      <div className="flex-grow flex flex-col text-white rounded-b-xl  bg-[#181818] py-6 px-4">
        <div className="flex justify-between mb-2">
          <h5 className=" text-xl font-semibold">{title}</h5>
          <NewBadge isNew={isNew} />
        </div>
        <p className="text-[#ADB7BE]">{description}</p>
        <div className="mt-4">
          {stack.map((s, index) => (
            <Stacks key={index}>{s}</Stacks>
          ))}{" "}
          <div className="flex gap-1 mt-1.5">
            <Link
              href={previewUrl}
              className="h-7 mt-1.5 w-14 block ms-2 md:hidden border-2 relative rounded-md border-[#ADB7BE] hover:border-white group/link tooltip tooltip-open tooltip-right"
            >
              <EyeIcon className="h-5 w-5 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
            <Link
              href={gitUrl}
              className="h-7 mt-1.5 w-14 block ms-2 md:hidden border-2 relative rounded-md border-[#ADB7BE] hover:border-white group/link tooltip tooltip-open tooltip-right"
            >
              <CodeBracketIcon className="h-5 w-5 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
