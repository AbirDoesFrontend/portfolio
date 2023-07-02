import React from "react";
import SectionTitle from "./SectionTitle";

import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";

import profileImg from "../public/assests/profileImg.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Abir Khan. As a MERN stack developer, I am
            passionate about creating robust and scalable web applications. With
            a strong foundation in{" "}
            <span className="text-textGreen">
              JavaScript, React, Node.js, and MongoDB
            </span>
            , I thrive on crafting efficient and intuitive user experiences.
            Through continuous learning and exploration of new technologies, I
            stay at the forefront of industry trends and best practices.
          </p>
          <p>
            <span className="text-textGreen">
              With a keen eye for detail and a dedication to clean, maintainable
              code
            </span>
            , I strive to create solutions that not only meet client
            requirements but also exceed their expectations.
          </p>
          <p>
            My portfolio showcases a diverse range of projects, demonstrating my
            versatility and ability to adapt to varying project requirements. I
            am always excited to take on new challenges and contribute to{" "}
            <span className="text-textGreen">
              innovative, cutting-edge web development initiatives
            </span>
            . Let&apos;s connect and bring your ideas to life!
          </p>
          <p>Here are some technologies I have been working with recently : </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                src={profileImg}
                alt="profileImg"
                className="rounded-lg h-full object-cover"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
