import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from "../MaterialTailwind";

const Education = () => {
  return (
    <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon color="purple"/>
            <Typography
              placeholder=""
              variant="h6"
              color="white"
              className="leading-none"
            >
              2020 - 2023
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              placeholder=""
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
            >
             <h1 className="text-xl">University Of Buea</h1>
            </Typography>
          </TimelineBody>
        </TimelineItem>
        
      </Timeline>
    </div>
    
  );
};

export default Education;
