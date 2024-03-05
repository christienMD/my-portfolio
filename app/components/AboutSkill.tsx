"use client";

import Image from "next/image";
import md from "@/public/images/MD.jpg";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "../MaterialTailwind";
import { useState } from "react";

const AboutSkill = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const data = [
    {
      label: "Skills",
      value: "skills",
      desc: <Skills />,
    },
    {
      label: "Education",
      value: "education",
      desc: <Education />,
    },
    {
      label: "Experience",
      value: "experience",
      desc: <Experience />,
    },
  ];

  return (
    <div className="flex justify-center items-center mt-10">
      <Tabs value={activeTab} className="max-w-[40rem]">
        <TabsHeader
          placeholder=""
          className="bg-transparent"
          indicatorProps={{
            className: "bg-gray-600/10 shadow-none !text-gray-900",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-500 text-lg font-semi-bold" : "text-gray-700"}
              placeholder=""
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody placeholder="">
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default AboutSkill;
