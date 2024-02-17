import React from "react";
import { Progress } from "../MaterialTailwind";

const Skills = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-12">
      <div>
        <h5>HTML/CSS</h5>
        <Progress placeholder="" value={95} color="purple" />
        <h5>JavaScript + ES6</h5>
        <Progress placeholder="" value={70} color="purple"></Progress>
        <h5>TypeScript</h5>
        <Progress placeholder="" value={70} color="purple"></Progress>
        <h5>React Js</h5>
        <Progress placeholder="" value={70} color="purple"></Progress>
        <h5>Next Js</h5>
        <Progress placeholder="" value={70} color="purple"></Progress>
        <h5>Git/GitHub</h5>
        <Progress placeholder="" value={80} color="purple"></Progress>
      </div>
      <div>
        <h5>React Query</h5>
        <Progress placeholder="" value={70} color="purple"></Progress>
        <h5>Zustand</h5>
        <Progress placeholder="" value={70} color="purple"></Progress>
        <h5>Tailwind CSS + Daisy UI</h5>
        <Progress placeholder="" value={75} color="purple"></Progress>
        <h5>Chakra UI</h5>
        <Progress placeholder="" value={90} color="purple"></Progress>
        <h5>Radix UI</h5>
        <Progress placeholder="" value={70} color="purple"></Progress>
        <h5>Bootstrap</h5>
        <Progress placeholder="" value={70} color="purple"></Progress>
      </div>
    </div>
  );
};

export default Skills;
