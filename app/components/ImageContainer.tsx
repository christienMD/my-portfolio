import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ImageContainer = ({ children }: Props) => {
  return (
    <div className="timeline-start rounded-full overflow-hidden sm:w-18 sm:h-22 mx-1">
      {children}
    </div>
  );
};

export default ImageContainer;
