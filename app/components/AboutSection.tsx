"use client";

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
import AboutSkill from "./AboutSkill";
import CustomImage from "./CustomImage";

const AboutSection = () => {
  return (
    <section className="text-[#c2c9ce]" id="about">
      <div className="text-center mt-10 flex justify-center items-center">
        <div className="md:max-w-2xl lg:max-w-3xl">
          <h2 className="text-4xl font-bold text-white my-5">About Me</h2>
          <p className="text-base align-baseline items-center">
            I am a Resourceful Frontend Web Developer with a successful track
            record in developing innovative web designs and features. I Possess
            solid knowledge of HTML, CSS, JavaScript, TypeScript , React Js and
            Next Js leveraging a comprehensive understanding gained through my
            computer science degree with ability to quickly learn new
            technologies. Beyond my formal education, I am continuously
            expanding my skill set to incorporate emerging technologies and
            industry best practices.
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="flex flex-row flex-wrap sm:max-w-full md:max-w-xl lg:max-w-4xl justify-center">
          <ImageContainer>
            <CustomImage src={htmlImg} alt="html-image" />
          </ImageContainer>
          <ImageContainer>
            <CustomImage src={cssImg} alt="css-image" />
          </ImageContainer>
          <ImageContainer>
            <CustomImage src={jsImg} alt="js-image" />
          </ImageContainer>
          <ImageContainer>
            <CustomImage src={tsImg} alt="ts-image" />
          </ImageContainer>
          <ImageContainer>
            <CustomImage src={reactImg} alt="react-image" />
          </ImageContainer>
          <ImageContainer>
            <CustomImage src={nextImg} alt="nextjs-image" />
          </ImageContainer>
          <ImageContainer>
            <CustomImage src={gitImg} alt="git-image" />
          </ImageContainer>
          <ImageContainer>
            <CustomImage src={tailwindImg} alt="tailwind-image" />
          </ImageContainer>
          <ImageContainer>
            <CustomImage src={chakraImg} alt="git-image" />
          </ImageContainer>
        </div>
      </div>
      <AboutSkill />
    </section>
  );
};

export default AboutSection;