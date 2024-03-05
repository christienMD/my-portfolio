import React from "react";
import { Progress } from "../MaterialTailwind";

const Skills = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-12">
      <div>
        <h5>HTML/CSS</h5>
        <Progress
          placeholder=""
          value={95}
          color="purple"
          className="mb-4 mt-1 bg-[#ADB7BE]"
        />
        <h5>JavaScript + ES6</h5>
        <Progress
          placeholder=""
          value={70}
          color="purple"
          className="mb-4 mt-1 bg-[#ADB7BE]"
        />
        <h5>TypeScript</h5>
        <Progress
          placeholder=""
          value={70}
          color="purple"
          className="mb-4 mt-1 bg-[#ADB7BE]"
        />
        <h5>React Js</h5>
        <Progress
          placeholder=""
          value={70}
          color="purple"
          className="mb-4 mt-1 bg-[#ADB7BE]"
        />
        <h5>Next Js</h5>
        <Progress
          placeholder=""
          value={70}
          color="purple"
          className="mb-4 mt-1 bg-[#ADB7BE]"
        />
        <h5>Git/GitHub</h5>
        <Progress
          placeholder=""
          value={80}
          color="purple"
          className="mb-4 mt-1  bg-[#ADB7BE]"
        />
      </div>
      <div>
        <h5>React Query & React Context</h5>
        <Progress
          placeholder=""
          value={70}
          color="purple"
          className="mb-4 mt-1  bg-[#ADB7BE]"
        />
        <h5>Zustand</h5>
        <Progress
          placeholder=""
          value={70}
          color="purple"
          className="mb-4 mt-1 bg-[#ADB7BE]"
        />
        <h5>Tailwind CSS + Material Tailwind</h5>
        <Progress
          placeholder=""
          value={75}
          color="purple"
          className="mb-4 mt-1 bg-[#ADB7BE]"
        />
        <h5>Chakra UI</h5>
        <Progress
          placeholder=""
          value={90}
          color="purple"
          className="mb-4 mt-1 bg-[#ADB7BE]"
        />
        <h5>Radix UI</h5>
        <Progress
          placeholder=""
          value={70}
          color="purple"
          className="mb-4 mt-1 bg-[#ADB7BE]"
        />
        <h5>Bootstrap</h5>
        <Progress
          placeholder=""
          value={70}
          color="purple"
          className="mb-4 mt-1 bg-[#ADB7BE]"
        />
      </div>
    </div>
  );
};

export default Skills;
