import React from "react";

const Skills = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-12">
      <div>
        <h5>HTML</h5>
        <progress className="progress w-56" value={95} max="100"></progress>
        <h5>CSS</h5>
        <progress className="progress w-56" value={90} max="100"></progress>
        <h5>JavaScript + ES6</h5>
        <progress className="progress w-56" value={70} max="100"></progress>
        <h5>TypeScript</h5>
        <progress className="progress w-56" value={70} max="100"></progress>
        <h5>React Js</h5>
        <progress className="progress w-56" value={70} max="100"></progress>
        <h5>Next Js</h5>
        <progress className="progress w-56" value={70} max="100"></progress>
      </div>
      <div>
        <h5>React Query</h5>
        <progress className="progress w-56" value={70} max="100"></progress>
        <h5>Zustand</h5>
        <progress className="progress w-56" value={70} max="100"></progress>
        <h5>Tailwind CSS + Daisy</h5>
        <progress className="progress w-56" value={75} max="100"></progress>
        <h5>Chakra UI</h5>
        <progress className="progress w-56" value={90} max="100"></progress>
        <h5>Radix UI</h5>
        <progress className="progress w-56" value={70} max="100"></progress>
        <h5>Bootstrap</h5>
        <progress className="progress w-56" value={70} max="100"></progress>
      </div>
    </div>
  );
};

export default Skills;
