import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BiPalette, BiLaptop, BiMobile } from "react-icons/bi";
// import { FaDuotone } from "react-icons/fa";
// import { FiServer } from "react-icons/fi";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import BottomLine from "../../../components/BottomLine";

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

  const services = [
    {
      id: 1,
      title: "Website & Mobile Applications",
      icon: <BiMobile />,
      description:
        "Kembangkan sistem informasi, sistem administrasi, atau sistem promosi, berbasis website & aplikasi mobile sesuai kebutuhan untuk meningkatkan keuntungan dan efisiensi operasional bisnis anda.",
    },
    {
      id: 2,
      title: "Branding & Content Creative",
      icon: < BiPalette />,
      description:
        "Tingkatkan reputasi bisnis Anda untuk membangun persepsi yang baik dan mudah dikenali di mata masyarakat dengan layanan Branding & Content Creative yang didambakan pelangggan bisnis anda.",
    },
    {
      id: 3,
      title: "Digital Marketing & Advertising",
      icon: <BiLaptop />,
      description:
        "I also provide Fully Responsive Static Website Design with HTML, CSS, Bootstrap, Tailwind.",
    },
  ];
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
        {services?.map((service) => (
          <div
            key={service.id}
            className={`${service.id % 2 === 0
              ? "bg-base-100 shadow-lg"
              : "bg-base-100 shadow-lg"
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
            <p className="text-accent">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
