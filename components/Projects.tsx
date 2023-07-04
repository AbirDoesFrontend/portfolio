import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

import borshaProject from "../public/assests/projects/borsha.png";
import carProject from "../public/assests/projects/car.png";
import articleProject from "../public/assests/projects/article.png";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some things that I have built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* First Project */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              href="https://toy-marketplace-b8d6d.web.app/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  src={borshaProject}
                  alt="borshaProject"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Toy Marketplace</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                A toy marketplace website. View products, Add or register your
                account with email and password or using Google with{" "}
                <span className="text-textGreen">Firebase Authentication</span>
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>ReactJs</li>
                <li>JavaScript</li>
                <li>TailwindCSS</li>
                <li>Firebase</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Netlify</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/AbirDoesFrontend/borsha-s-dream-land"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  href="https://toy-marketplace-b8d6d.web.app/"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Second Project */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              href="https://toy-marketplace-b8d6d.web.app/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  src={carProject}
                  alt="carProject"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">CarHub</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-md">
                A Car showcase website. Search cars with specifying model,
                Filter out cars using{" "}
                <span className="text-textGreen">Fuel , Gas and Elecetric</span>{" "}
                compability and year. View Car details and many more.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>NextJs</li>
                <li>JavaScript</li>
                <li>TailwindCSS</li>
                <li>Vercel Deployment</li>
                <li>Imagin Studio</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/AbirDoesFrontend/car_showcase_next_js"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  href="https://car-showcase-next-js-6a4e.vercel.app/"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Third Project */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              href="https://toy-marketplace-b8d6d.web.app/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  src={articleProject}
                  alt="articleProject"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">SummerAlze</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                An AI article summarizer that offers users the ability to extract key insights and condense lengthy articles into concise summaries with remarkable accuracy and efficiency using <span className="text-textGreen">OpenAI GPT-4</span>
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>ReactJs</li>
                <li>JavaScript</li>
                <li>TailwindCSS</li>
                <li>RapidApi</li>
                <li>OpenAI</li>
                <li>Netlify</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/AbirDoesFrontend/ai-summarizer"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  href="https://summaralz.netlify.app/"
                  className="hover:text-textGreen duration-300"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
