import Image from "next/image";
import MD from "@/public/images/MD.jpg";

const AboutSection = () => {
  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image src={MD} alt="my-photo" width={350} height={350} />
        <div>
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <p className="text-base md:text-lg">
            I am a young enthusiast who is keen on IT and anything about it
            since my first steps to High School. During the past few years, I
            gained lots of experience in this field due to the strong desire of
            becoming an expert in my field. I&apos;m pretty swift at learning
            new technologies which has contributed to my adaptive skills, easily
            adapting to new environments and new tech. “For me, frontend
            development is more than coding. It&apos;s a canvas with a blank
            page and I am the artist to paint it with colors of coding. NOW!
            WHAT DO YOU WANT ME TO PAINT?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
