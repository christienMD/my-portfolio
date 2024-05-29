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
              03-2024 - Present
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
                  Full Stack Developer Intern
                </span>
              </h1>
              <p className="text-base">
                Collaborated with a team to design and implement a job board
                application from scratch, connecting students with job
                opportunities. Utilized PHP and Laravel for server-side
                functionalities, including user registration, authentication,
                and job posting management. Leveraged HTML, CSS, React.js, and
                Next.js to build intuitive and responsive user interfaces,
                enhancing user engagement and satisfaction.
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
              02-2024 - 04-2024
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
                  Frontend Developer Mentor
                </span>
              </h1>
              <p className="text-base">
                Led a comprehensive mentorship program for frontend development
                interns at Wicon, providing video tutorials, comprehensive
                notes, and personalized support. Conducted regular online
                evaluation sessions to assess interns&apos; progress and
                understanding of frontend concepts, offering personalized
                feedback and guidance for improvement. Fostered a collaborative
                culture among interns, promoting knowledge sharing, peer-to-peer
                support, and teamwork through group projects and pair
                programming sessions.
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
              04-2024 - Present
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
                  Frontend Developer (Part-Time)
                </span>
              </h1>
              <p className="text-base">
                Working remotely as a part-time Frontend Developer at Touko
                Banix Inc., contributing to the{" "}
                {/* <a href="#" className="text-purple-500">
                </a> */}
                Ndamba Project. Developed and implemented the admin dashboard
                for Ndamba, featuring functionalities to manage countries,
                states, regions, towns, and cities. Designed and built the
                landing page, including carousels for premium players, news
                sections, reels format videos, and a partners/sponsors section.
                Authored the Software Requirements Specifications (SRS)
                documentation for the Ndamba project, detailing the
                system&apos;s functionalities and user interface specifications.
                Integrated responsive design elements, ensuring a seamless user
                experience across both mobile and desktop platforms.
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
