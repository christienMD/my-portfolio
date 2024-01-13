"use client";

import Image from "next/image";
import md from "@/public/images/MD.jpg";
import Skills from "./Skills";

const AboutSkill = () => {
  return (
    <section className="text-white mt-5">
      <h2 className="text-2xl text-white font-bold text-center mb-2">
        More About Me
      </h2>
      <div className="flex justify-center">
        <div role="tablist" className="tabs tabs-bordered md:tabs-lg">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Skills"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content pt-4">
            <Skills />
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Education"
          />
          <div role="tabpanel" className="tab-content pt-4">
            Tab content 2
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Experience"
          />
          <div role="tabpanel" className="tab-content pt-4">
            Tab content 3
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkill;
