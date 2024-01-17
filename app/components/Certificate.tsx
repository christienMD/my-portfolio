import Image, { StaticImageData } from "next/image";
import htmlandCSSC from "@/public/images/htmlCertificate.png";
import jsC from "@/public/images/jsCerifi.png";
import tsC from "@/public/images/tsCertifi.png";
import reactC from "@/public/images/reactCertifi.png";
import nextC from "@/public/images/nextjsCertifi.png";
import gitC from "@/public/images/gitCertifi.png";

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
