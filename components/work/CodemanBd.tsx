import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";

const CodemanBd = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend Developer{" "}
        <span className="text-textGreen tracking-wide">@CodemandBD</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        May 2021 - Feb 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-sm">
            <BiRightArrow />
          </span>
          Maintain and write modern, performant and maintainable code of client
          and internel projects.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-sm">
            <BiRightArrow />
          </span>
          Managing and handling clients and their projects , Building and maintaing good communication with client and students
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-sm">
            <BiRightArrow />
          </span>
          Work with a variety of different languages , platforms , frameworks , libraries and content management systems such as JavaScript , ReactJs , TailwindCSS, Bootstrap, Wordpress and Shopify
        </li>
      </ul>
    </motion.div>
  );
};

export default CodemanBd;
