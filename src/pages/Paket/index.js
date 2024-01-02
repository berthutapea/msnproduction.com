import React, { useEffect, useState } from "react";
import Items from "../../utils/Items";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp, FaAngleRight } from "react-icons/fa";
import "./Paket.css";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../hooks/useAnimation";
import { BottomLine, Countdown } from "../../components";

const Paket = () => {
  const [items, setItems] = useState(Items);
  const [activeBtn, setActiveBtn] = useState("wedding");
  const location = useLocation();
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const animation = useAnimation();
  const handleOnClick = () => {
    setShowMore(!showMore);
  };

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
    const filtered = category === "all" ? Items : Items.filter((item) => item.category === category);
    setItems(filtered);
    if (filtered.length > 4 && location.pathname === "/") {
      setItems(filtered.slice(0, 4));
    }
  };

  useEffect(() => {
    filterItem("wedding");
  }, []);

  return (
    <div className={`${location.pathname !== "/" && "pt-16"}`}>
      <div className="py-16 parent ">
        <motion.div
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={headingAnimation}
        >
          <div className="mb-6">
            <h3 className="text-center text-accent">
              Segera Booking Slot Promo Sebelum Kehabisan!
            </h3>
            <h1 className="text-4xl font-semibold text-center">
              Harga Paket Promo <span className="text-primary">Tahun Baru 2024</span>
            </h1>
            <BottomLine />
            <Countdown />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={sectionBodyAnimation}
        >
          <div className="flex flex-wrap items-center justify-center mt-2 mb-6">
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary hover:text-primary duration-300 mx-3 my-3 sm:my-0 ${activeBtn === "wedding" && "active-btn"
                }`}
              onClick={() => {
                setActiveBtn("wedding");
                filterItem("wedding");
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

          <div className="flex flex-wrap items-center justify-center mt-6 mb-6">
            {activeBtn === "wedding" && (
              <h3 className="text-3xl font-semibold text-center" onClick={() => {
                filterItem("wedding");
                setActiveBtn("wedding");
              }}>
                Paket Pembuatan Website <span className="text-primary">Wedding</span>
              </h3>
            )}
            {activeBtn === "tokoonline" && (
              <h3 className="text-3xl font-semibold text-center" onClick={() => {
                filterItem("tokoonline");
                setActiveBtn("tokoonline");
              }}>
                Paket Pembuatan Website <span className="text-primary">Toko Online</span>
              </h3>
            )}
            {activeBtn === "companyprofile" && (
              <h3 className="text-3xl font-semibold text-center" onClick={() => {
                filterItem("companyprofile");
                setActiveBtn("companyprofile");
              }}>
                Paket Pembuatan Website <span className="text-primary">Company Profile</span>
              </h3>
            )}
          </div>

          {/* Items Card */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
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
                className="flex flex-col p-3 duration-500 rounded-lg shadow-lg impactfull-card"
              >
                <h3 className="text-lg font-semibold text-center text-accent">
                  {item.title}
                </h3>
                <h3 className="py-2 text-sm text-center text-gray-600">
                  {item.subtitle}
                </h3>
                <span className="justify-center text-center paket-featured">Diskon 34%</span>
                <div className="py-2 text-center">
                  <sup className="text-2xl text-accent bottom-2">
                    {item.label}
                  </sup>
                  <span className="text-4xl font-semibold uppercase text-accent">
                    {item.price}
                  </span>
                  <small className="p-1 text-base text-gray-400 line-through">
                    {item.diskon}
                  </small>
                </div>
                <span className="flex justify-center mb-5 ">
                  <a
                    href="https://wa.me/6282125664554"
                    target="blank"
                  >
                    <button className="flex items-center gap-3 text-black duration-500 bg-transparent border-2 btn border-primary hover:bg-primary hover:border-transparent hover:text-white">
                      <FaWhatsapp className="text-2xl" />
                      <span className="text-button-mobile">Info Lebih Lanjut</span>
                    </button>
                  </a>
                </span>
                <div className="w-full h-[1px] bg-primary inline-block align-bottom mb-4"></div>
                <div className="text-accent">
                  {item.description.split("\n").map((s, i) => (
                    <React.Fragment key={i + 1}>
                      {(showMore || i < 7) && (
                        <div className="flex items-center mb-2">
                          <span className="mr-2 text-xs text-gray-500">{item.icon}</span>
                          <span className="text-sm text-gray-600 ">{s}</span>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                  <span className="py-4 text-base font-medium text-center cursor-pointer text-accent hover:text-primary" style={{ display: "flex", justifyContent: "center" }}>
                    <motion.button
                      initial={{ y: -500 }}
                      animate={{ y: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      onClick={() => window.scrollBy(0, showMore ? -600 : 600)}
                    >
                      <span
                        onClick={handleOnClick}
                      >
                        {showMore ? "Lihat Lebih Sedikit" : "Lihat Lebih Banyak"}
                      </span>
                    </motion.button>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {location.pathname === "/" && (
          <div className="mt-8 text-right">
            <Link
              to="/paket"
              className="duration-300 text-1xl hover:text-primary"
            >
              <button className="primary-button ">
                <span>Lihat Semua</span>
                <span>
                  <FaAngleRight />
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Paket;
