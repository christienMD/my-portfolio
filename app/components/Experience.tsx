import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from "../MaterialTailwind";

const Experience = () => {
  return (
    <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon color="purple" />
            <Typography
              placeholder=""
              variant="h6"
              color="white"
              className="leading-none"
            >
              2023 - 2024
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              placeholder=""
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
            >
              <h1 className="text-xl font-bold mb-2">
                <span className="border-b-2 border-purple-500">
                  Personal Projects
                </span>
              </h1>
              <p className="text-base">
                Developed and launched various personal projects, including a
                portfolio website. Used modern frontend technologies like React,
                Next.js, and Tailwind CSS to build responsive and visually
                appealing user interfaces.
              </p>
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon color="purple" />
            <Typography
              placeholder=""
              variant="h6"
              color="white"
              className="leading-none"
            >
              01-08-2023 - 31-01-2024
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              placeholder=""
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
            >
              <h1 className="text-xl font-bold mb-2">
                <span className="border-b-2 border-purple-500 pt-1">
                  Frontend Developer Intern
                </span>
              </h1>
              <p className="text-base">
                Worked as a frontend developer intern at Loop Technologies,
                collaborating with a team of developers to build and maintain
                web applications. Developed user-facing features and optimized
                application performance. Gained valuable experience working with
                technologies like React, TypeScript, and Next js.
              </p>
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Experience;
