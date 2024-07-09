import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Testimonial.css";
import Reviews from "../../../utils/Reviews";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import {BottomLine} from "../../../components";

const Testimonial = () => {
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
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-16 parent bg-neutral ">
      <motion.div
        className="mb-8"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-accent">Apa Kata Mereka ?</h3>
        <h1 className="text-4xl font-semibold text-center">
          Testimoni <span className="text-primary">Pelanggan</span>
        </h1>
        <BottomLine />
        <h2 className="py-5 text-center text-accent">Kepuasan Pelanggan Adalah Prioritas Utama Kami</h2>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        <Slider {...settings}>
          {Reviews.map((review) => (
            <div key={review.id} className="mt-6">
              <div
                className="mx-4 rounded-lg shadow-xl single-blog cursor-pointer border-2 border-primary pt-6 flex flex-col justify-between h-[300px]"

              >
                <div className="px-6">
                  <FaQuoteLeft className="mb-4 text-4xl text-primary"></FaQuoteLeft>
                  <h2 className="text-center">{review.description}</h2>
                </div>
                <div className="flex justify-end px-6 py-2 mt-12 rounded-b bg-primary">
                  <div className="mr-4 text-right text-white ">
                    <h2 className="py-1 font-medium leading-none">{review.name}</h2>
                    <p className="text-xs leading-none">{review.bio}</p>
                  </div>
                  <img
                    src={review.img}
                    alt="client"
                    className="inline-block w-16 h-16 -mt-10 bg-white rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Testimonial;
