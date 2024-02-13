import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface Props {
  src: StaticImageData;
  alt: string;
}

const Cerificate = ({ src, alt }: Props) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl overflow-hidden sm:max-w-full sm:mx-auto">
      <Image src={src} alt={alt} className="object-cover" />
    </div>
  );
};

export default Cerificate;
