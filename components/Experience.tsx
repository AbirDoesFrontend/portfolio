import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import CodemanBd from "./work/CodemanBd";
import Fiverr from "./work/Fiverr";

const Experience = () => {
  const [workCodemanBD, setWorkCodemanBD] = useState(true);
  const [workFiverr, setWorkFiverr] = useState(false);

  const handleCodemanBd = () => {
    setWorkCodemanBD(true);
    setWorkFiverr(false);
  };

  const handleFiverr = () => {
    setWorkCodemanBD(false);
    setWorkFiverr(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleCodemanBd}
            className={`${
              workCodemanBD
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            CodemanBD
          </li>
          <li
            onClick={handleFiverr}
            className={`${
              workFiverr
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8`}
          >
            Fiverr
          </li>
        </ul>
        {workCodemanBD && <CodemanBd />}
        {workFiverr && <Fiverr />}
      </div>
    </section>
  );
};

export default Experience;
