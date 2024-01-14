"use client";

import ProjectCard from "./ProjectCard";
import { projectData } from "../projectData";
import ProjectTag from "./ProjectTag";
import { useState } from "react";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const handelTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div className="mt-10 px-5">
      <h2 className="text-4xl text-white text-center mb-6 font-bold">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handelTagChange}
          isSelected={tag === "All"}
          name="All"
        />
        <ProjectTag
          onClick={handelTagChange}
          isSelected={tag === "Web"}
          name="Web"
        />
        <ProjectTag
          onClick={handelTagChange}
          isSelected={tag === "Mobile"}
          name="Mobile"
        />
      </div>
      <div className="grid md:grid-cols-3 md:gap-6 gap-6">
        {filteredProjects.map((project) => (
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
