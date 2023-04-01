import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Services from "../../../utils/Services";
import { FaAngleRight } from "react-icons/fa";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import BottomLine from "../../../components/BottomLine//BottomLine";
import "../../../components/Blur/Blur.css";

const Service = () => {
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
        <h3 className="text-accent text-center">Fokus & Layanan</h3>
        <h1 className="text-4xl font-semibold text-center">
          Solusi <span className="text-primary">Digital & Kreatif</span>
        </h1>
        <BottomLine />
        <h2 className="text-accent text-center py-5">Kami fokus memberikan solusi holistik bagi bisnis Anda dalam membangun brand Anda secara Efektif & Konsisten melalui berbagai saluran Digital. Kami akan membantu Anda dalam mengembangkan bisnis sehingga tercapai tujuan Perusahaan Anda dengan lebih Efektif.</h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {Services?.map((service) => (
          <div
            key={service.id}
            className={`${service.id % 2 === 0
              ? "bg-base-100 impactfull-card shadow-lg"
              : "bg-base-100 impactfull-card shadow-lg"
              } rounded-lg p-6 duration-300`}
          >
            <div className="text-center mb-4">
              <span className="text-primary text-5xl inline-block">
                {service.icon}
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4">
              {service.title}
            </h2>
            <p className="text-accent">
              {service.description.split("\n").map((s, i) => (
                <React.Fragment key={i + 1}>
                  <span className="text-gray-600 text-justify inline-block align-bottom mb-4">{s}</span>
                  <br />
                </React.Fragment>
              ))}
              <br />
              <span className="flex justify-center mb-5">
                <a
                  href="https://wa.me/6282125664554"
                  target="blank"
                >
                  <button className="btn text-black flex items-center gap-3 border-2 border-primary bg-transparent hover:bg-primary hover:border-transparent hover:text-white duration-500">
                    <span className="text-button-mobile">Hubungi Kami</span>
                    <span>
                      <FaAngleRight />
                    </span>
                  </button>
                </a>
              </span>
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
