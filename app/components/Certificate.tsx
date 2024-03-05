import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface Props {
  src: StaticImageData;
  alt: string;
}

const Cerificate = ({ src, alt }: Props) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl overflow-hidden sm:max-w-full sm:mx-auto transition-transform ease-in-out duration-500 hover:transform hover:scale-110 hover:delay-400 rounded-2xl flex flex-col gap-16 bg-grey3">
      <Image src={src} alt={alt} className="object-cover rounded-xl" />
    </div>
  );
};

export default Cerificate;
