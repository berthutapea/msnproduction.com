import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
// import { RiFolderInfoFill } from "react-icons/ri";
// import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
// import Lottie from "react-lottie";
// import coding from "../../../assets/coding.json";
import bannerImg from "../../../assets/banner-msn-production.png"
import "../../shared/Shared.css";
import SecondaryBtn from "../../../components/SecondaryBtn";

const Banner = () => {
  // const defaultOptions = {
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* <h2 className="text-neutral text-xl font-medium">Hello, I'm</h2> */}
        <h1 className="text-4xl font-semibold mb-0">MSN PRODUCTION</h1>
        {/* <div className="my-10"> */}
        {/* <TypeAnimation
            className="text-2xl text-primary font-bold"
            cursor={true}
            sequence={[
              "A Front-end Developer",
              2000,
              "A React JS Developer",
              2000,
              "A Mern-stack Developer",
              2000,
            ]}
            wrapper="div"
            repeat={Infinity}
          /> */}
        <h2 className="text-2xl text-primary font-bold my-8">Kreavitas & Teknologi Kami Wujudkan Visi Bisnis Anda!</h2>
        {/* </div> */}
        <p className="text-accent max-w-md mb-10 font-medium">
          MSN Production adalah perusahaan penyedia layanan jasa pembuatan website, aplikasi mobile, branding & konten kreatif, serta internet marketing, & Advertising sesuai kebutuhan bisnis anda dengan harga murah kualitas mewah.
        </p>

        <div className="flex items-center mb-20">
          <a
            href="https://wa.me/6282125664554"
            target="blank"
          >
            <button className="primary-button">
              <span className="text-button-mobile">Konsultasi Gratis</span>
              <span>
                <FiArrowRight />
              </span>
            </button>
          </a>
          <Link to="/about" className="ml-4">
            <SecondaryBtn>
              <span className="text-button-mobile ">Lihat Penawaran</span>
              <span>
                <FiArrowRight />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="banner-image-wrapper order-1 lg:order-3 lg:pt-0 md:pt-0 sm:pt-0 pt-10">
          <img src={bannerImg} alt="Banner"></img>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
