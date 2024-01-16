import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section id="contact" className="md:my-12 py-24 mt-0">
      <h2 className="text-center text-3xl font-bold text-white mb-5">
        Contact Me
      </h2>
      <div className="grid md:grid-cols-2 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 left-0 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
          <h5 className="text-2xl font-bold text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md text-base">
            Hello There! I am Excited to connect with you. Whether it&apos;s for
            opportunities, collaborations, or just a tech chat, I&apos;m all
            ears! Feel free to reach out—I&apos;m not only a dedicated developer
            but also friendly and open for meaningful conversations. Looking
            forward to the chance to connect and create something amazing!
          </p>
          <div className="socials flex flex-wrap-reverse gap-2 text-white">
            <Link href="https://github.com/christienMD">
              <FaGithub size={22} />
            </Link>

            <Link href="https://www.linkedin.com/in/mesueh-christien-18886121b">
              <FaLinkedinIn size={22} />
            </Link>
            <Link href="https://mesuehchristian12@gmail.com">
              <FaRegEnvelope size={22} />
            </Link>
          </div>
        </div>
        <div className="">
          <form className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white mb-2 block sm:text-sm md:text-base font-medium"
              >
                Your email
              </label>
              <input
                className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                type="email"
                id="email"
                required
                placeholder="mdchristien@md.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white mb-2 block sm:text-sm md:text-base font-medium"
              >
                Subject
              </label>
              <input
                className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                type="text"
                id="subject"
                required
                placeholder="Subject"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white mb-2 block sm:text-sm md:text-base font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Send a Message"
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 rounded lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
