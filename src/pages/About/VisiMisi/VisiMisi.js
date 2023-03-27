import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import visiMisi from "../../../utils/visiMisi"
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation"
import BottomLine from "../../../components/BottomLine";
import "../../../components/Blur.css";

const VisiMisi = () => {
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
    <div className="parent py-20 bg-neutral">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-accent text-center">Tujuan & Arah</h3>
        <h1 className="text-4xl font-semibold text-center">
          Visi <span className="text-primary">& Misi</span>
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {visiMisi?.map((visiMisi) => (
          <div
            key={visiMisi.id}
            className={`${visiMisi.id % 2 === 0
              ? "bg-base-100 impactfull-card shadow-lg"
              : "bg-base-100 impactfull-card shadow-lg"
              } rounded-lg p-6 duration-300`}
          >
            <div className="text-center mb-4">
              <span className="text-primary text-5xl inline-block">
                {visiMisi.icon}
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4">
              {visiMisi.title}
            </h2>
            <p className="text-accent">
              {visiMisi.description}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VisiMisi;