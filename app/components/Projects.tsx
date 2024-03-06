"use client";

import ProjectCard from "./ProjectCard";
import { projectData } from "../projectData";
import ProjectTag from "./ProjectTag";
import { useState, useRef } from "react";
import { delay, motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [tag, setTag] = useState("All");
  const handelTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="mt-10 px-5">
      <h2
        className="text-4xl text-white text-center mb-6 font-bold "
        id="projects"
      >
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
      <ul ref={ref} className="grid md:grid-cols-3 md:gap-6 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.6 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              stack={project.stack}
              isNew={project.isNew}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;
