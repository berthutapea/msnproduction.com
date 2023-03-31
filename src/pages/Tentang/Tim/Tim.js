import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TimPeople from "../../../utils/TimPeople"
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation"
import BottomLine from "../../../components/BottomLine/BottomLine";
import "../../../components/Blur/Blur.css";

const Tim = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);
  return (
    <div className="parent py-16">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-accent text-center">Tim Hebat Kami</h3>
        <h1 className="text-4xl font-semibold text-center">
          Tim <span className="text-primary">Kami</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {TimPeople?.map((TimPeople) => (
          <div
            key={TimPeople.id}
            className={`${TimPeople.id % 2 === 0
              ? "bg-base-100"
              : "bg-base-100"
              } rounded-lg p-6 duration-300`}
          >
            <div className="text-center w-45 mx-auto">
              {TimPeople.icon}
            </div>
            <div className="bg-white shadow-lg  relative bottom-8">
              <h2 className="text-[20px] font-semibold text-center">
                {TimPeople.title}
              </h2>
              <div className="text-center">
                <div className="w-20 h-[1px] bg-primary mx-auto" style={{ marginLeft: 'auto', marginRight: 'auto !important' }}></div>
              </div>
              <p className="text-accent text-[15px] text-center">
                {TimPeople.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tim;