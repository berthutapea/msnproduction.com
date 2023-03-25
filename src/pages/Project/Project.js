import React, { useEffect, useState } from "react";
import Items from "../../utils/Items";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
// import { FaBullhorn, FaLaptop, FaMobileAlt } from "react-icons/fa";
import "./Project.css";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../hooks/useAnimation";
import BottomLine from "../../components/BottomLine";

const Project = () => {
  const [items, setItems] = useState(Items);
  const [activeBtn, setActiveBtn] = useState("all");
  const location = useLocation();
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
    if (location.pathname === "/" && items.length > 4) {
      setItems(items.slice(0, 4));
    }
  }, [inView, animation, location, items]);

  const filterItem = (category) => {
    const filtered = Items.filter((item) => item.category === category);
    setItems(filtered);
    if (filtered.length > 4 && location.pathname === "/") {
      setItems(filtered.slice(0, 4));
    }
  };

  return (
    <div className={`${location.pathname !== "/" && "pt-16"}`}>
      <div className="parent py-12 ">
        <motion.div
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={headingAnimation}
        >
          <div className="mb-12">
            <h3 className="text-accent text-center">
              Segera Booking Slot Promo Sebelum Kehabisan!
            </h3>
            <h1 className="text-4xl font-semibold text-center">
              Harga Paket Promo<span className="text-primary">Spesial Lebaran!</span>
            </h1>
            <BottomLine />
            <h2 className="text-accent text-center py-5">Segera Booking Slot Promo Sebelum Kehabisan!</h2>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={sectionBodyAnimation}
        >
          <div className="mt-6 mb-12 flex items-center justify-center flex-wrap ">
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary hover:text-primary duration-300 mx-3 my-3 sm:my-0 ${activeBtn === "all" && "active-btn"
                }`}
              onClick={() => {
                setActiveBtn("all");
                location.pathname === "/"
                  ? setItems(Items.slice(0, 4))
                  : setItems(Items);
              }}
            >
              Website Wedding
            </button>
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary hover:text-primary duration-300 mx-3 my-3 sm:my-0 ${activeBtn === "tokoonline" && "active-btn"
                }`}
              onClick={() => {
                setActiveBtn("tokoonline");
                filterItem("tokoonline");
              }}
            >
              Website Toko Online
            </button>
            {/* <button
            className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${
              activeBtn === "e-commerce" && "active-btn"
            }`}
            onClick={() => {
              setActiveBtn("e-commerce");
              filterItem("e-commerce");
            }}
          >
            E-Commerce
          </button> */}
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary hover:text-primary duration-300 mx-3 my-3 sm:my-0 ${activeBtn === "companyprofile" && "active-btn"
                }`}
              onClick={() => {
                setActiveBtn("companyprofile");
                filterItem("companyprofile");
              }}
            >
              Website Company Profile
            </button>
          </div>

          {/* Items Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {items.map((item) => (
              <motion.div
                initial={{ x: 200, opacity: 0, scale: 0 }}
                animate={{
                  x: 0,
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                key={item.id}
                className="item-container rounded-lg shadow-lg p-3  flex flex-col justify-between duration-500 impactfull-card "
              >
                {/* <div className=""> */}
                {/* <img
                    className="rounded-lg h-full w-full"
                    src={item.mainImage}
                    alt={item.title || "Item Image"}
                  /> */}
                {/* <div className=""> */}
                <span className="paket-featured text-center">Diskon 34%</span>
                <h3 className="text-lg text-accent font-semibold text-center">
                  {item.title}
                </h3>
                <h3 className="text-sm text-gray-600 text-center">
                  {item.subtitle}
                </h3>
                <div className="text-center py-2">
                  <sup className="text-2xl text-accent bottom-2">
                    {item.label}
                  </sup>
                  <span className="text-4xl text-accent font-semibold uppercase">
                    {item.price}
                  </span>
                  <small className="text-base text-gray-400 line-through p-1">
                    {item.diskon}
                  </small>
                </div>
                <span className="flex justify-center mb-5 ">
                  <a
                    href="https://wa.me/6282125664554"
                    target="blank"
                  >
                    <button className="btn text-black flex items-center gap-3 border-2 border-primary bg-transparent hover:bg-primary hover:border-transparent hover:text-white duration-500">
                      <FaWhatsapp className="text-2xl" />
                      <span className="text-button-mobile">Info Lebih Lanjut</span>
                    </button>
                  </a>
                </span>
                <div className="text-accent ">
                  <div className="w-full h-[1px] bg-primary inline-block align-bottom mb-4"></div>
                  {item.description.split("\n").map((s, i) => (
                    <React.Fragment key={i + 1}>
                      <span className="text-gray-600 text-justify inline-block align-bottom mb-4">{s}</span>
                      <br />
                    </React.Fragment>
                  ))}
                  <br />
                </div>
                {/* <Link
                  to={`/project/${item.id}`}
                  className="mt-3 inline-block"
                >
                  <button className="btn btn-sm border-2 border-transparent bg-primary hover:bg-transparent text-white hover:border-primary duration-500">
                        See Details
                      </button>
                </Link> */}
                {/* </div> */}
                {/* </div> */}
              </motion.div>
            ))}
          </div>
        </motion.div>
        {location.pathname === "/" && (
          <div className="mt-4 text-right">
            <Link
              to="/project"
              className="text-1xl hover:text-primary duration-300"
            >
              <button className="primary-button ">
                <span>Lihat Semua</span>
                <span>
                  <FiArrowRight />
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
