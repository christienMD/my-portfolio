import ProjectCard from "./ProjectCard";
import { projectData } from "../projectData";

const ProjectsSection = () => {
  return (
    <div className="mt-10 px-5">
      <h2 className="text-4xl text-white text-center mb-6 font-bold">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">
          All
        </button>
        <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">
          Web
        </button>
        <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">
          Mobile
        </button>
      </div>
      <div className="grid md:grid-cols-3 md:gap-3 gap-5">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
