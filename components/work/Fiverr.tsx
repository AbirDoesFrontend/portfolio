import React from 'react'
import { motion } from "framer-motion";
import { BiRightArrow } from "react-icons/bi";

const Fiverr = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Wordpress Developer{" "}
        <span className="text-textGreen tracking-wide">@Fiverr (Freelance Marketplace)</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        April 2020 - March 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-sm">
            <BiRightArrow />
          </span>
          Building websites on Wordpress. Developing and customizing themes and plugins.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-sm">
            <BiRightArrow />
          </span>
          Managing and handling clients and their projects , Building and maintaing good communication with client.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1 text-sm">
            <BiRightArrow />
          </span>
          Working on PHP and simple html , css and javascript
        </li>
      </ul>
    </motion.div>
  )
}

export default Fiverr