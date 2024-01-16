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
    <div className="card card-compact w-96 bg-base-100 shadow-xl overflow-hidden">
      <figure>
        <Image src={src} alt={alt} />
      </figure>
    </div>
  );
};

export default Cerificate;
