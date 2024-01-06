import Image from "next/image";
import reactImg from "@/public/images/react.webp";
import htmlImg from "@/public/images/html.webp";
import cssImg from "@/public/images/css.webp";
import jsImg from "@/public/images/js.webp";
import nextImg from "@/public/images/next.webp";
import gitImg from "@/public/images/git.webp";
import tsImg from "@/public/images/typescript.png";
import tailwindImg from "@/public/images/tailwindcss.webp";
import chakraImg from "@/public/images/icons8-chakra-ui-144.png";

import ImageContainer from "./ImageContainer";

const AboutSection = () => {
  return (
    <section className="text-[#c2c9ce] container">
      <div className="text-center mt-10 flex justify-center items-center">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-white my-5">About Me</h2>
          <p className="text-base md:text-base text-center">
            I am a Resourceful Frontend Web Developer with a successful track
            record in developing innovative web designs and features. Possesses
            solid knowledge of HTML, CSS, JavaScript, TypeScript , React Js and
            Next Js with ability to quickly learn new technologies. Demonstrated
            success in debugging, identifying and resolving complex code issues.
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="flex flex-row flex-wrap max-w-xl justify-center">
          <ImageContainer>
            <Image src={htmlImg} alt="html-image" />
          </ImageContainer>
          <ImageContainer>
            <Image src={cssImg} alt="css-image" />
          </ImageContainer>
          <ImageContainer>
            <Image src={jsImg} alt="js-image" />
          </ImageContainer>
          <ImageContainer>
            <Image src={tsImg} alt="ts-image" />
          </ImageContainer>
          <ImageContainer>
            <Image src={reactImg} alt="react-image" />
          </ImageContainer>
          <ImageContainer>
            <Image src={nextImg} alt="nextjs-image" />
          </ImageContainer>
          <ImageContainer>
            <Image src={gitImg} alt="git-image" />
          </ImageContainer>
          <ImageContainer>
            <Image src={tailwindImg} alt="tailwind-image" />
          </ImageContainer>
          <ImageContainer>
            <Image src={chakraImg} alt="git-image" />
          </ImageContainer>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
