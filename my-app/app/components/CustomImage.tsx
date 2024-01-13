import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  alt: string;
  width?: number;
  hieght?: number;
}

const CustomImage = ({ src, alt, width, hieght }: Props) => {
  return <Image src={src} alt={alt} width={66} height={70} />;
};

export default CustomImage;
