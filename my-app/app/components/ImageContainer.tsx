import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ImageContainer = ({ children }: Props) => {
  return (
    <div className="timeline-start rounded-full overflow-hidden w-20 h-24">
      {children}
    </div>
  );
};

export default ImageContainer;
