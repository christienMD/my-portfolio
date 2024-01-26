"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import mdprofile from "@/public/images/mdprofile.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { easeIn } from "framer-motion/dom";

const HeroSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = `${window.location.origin}/files/Mesueh_Christien_Resume.pdf`;
    link.download = "Mesueh_Christien_Resume.pdf";
    link.click();
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-white mb-4 text-4xl sm:text-3xl lg:text-5xl lg:leading-none font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Mesueh Christien",
                1200, // wait 1s before replacing "Mice" with "Hamsters"
                "A Frontend Web Developer",
                1200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base mb-6 lg:text-base">
            Frontend Enthusiast. I make beautiful things with React & Next. I am
            Passionate about making things visually stunning, even when no
            one&apos;s watching. Let&apos;s create something React-ive together!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              <Link href="#contact">Hire Me</Link>
            </button>
            <button
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white mt-3"
              onClick={handleDownloadCV}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume(CV)
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          className="col-span-5 place-self-center mt-4 lg:mt-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, easeIn: 0.3 }}
        >
          <div className="rounded-full overflow-hidden h-48 w-48 mx-auto">
            <Image
              src={mdprofile}
              alt="my Image"
              className="rounded-full"
              width={300}
              height={200}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
