import React, { useEffect, useRef, useState } from "react";
import "./Kontak.css";
import "../../components/PrimaryBtn/PrimaryBtn";
import "../shared/Shared.css";
import { motion, useAnimation } from "framer-motion";
import {
  FaClock,
  FaPhoneAlt,
  FaLocationArrow,
} from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { headingAnimation, kontakAnimation } from "../../hooks/useAnimation";
import BottomLine from "../../components/BottomLine/BottomLine";
import Map from "../../pages/Kontak/Map/Map";

const Kontak = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "itsproali_portfolio",
        "itsproali_portfolio",
        form.current,
        "H-ispiDvwdbG_76iq"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="parent py-16">
      <motion.div
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-accent text-center mt-16">Kontak</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          Hubungi <span className="text-primary">Kami</span>
        </h1>
        <BottomLine />
        <h2 className="text-accent text-center py-5">Jangan sungkan untuk menghubungi kami kapan saja. Anda bisa berkonsultasi gratis dengan tim hebat kami yang siap membantu anda dalam pembuatan website dan mengembangkan bisnis perusahaan Anda.
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-8">
        <motion.div
          className=""
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={kontakAnimation}
        >
          <form ref={form} onSubmit={handleSend}>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
              <input
                className="input-field"
                type="text"
                name="name"
                id="name"
                placeholder="Nama"
                required
              />
              <input
                className="input-field"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              className="input-field"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subjek"
              required
            />
            <textarea
              className="input-field"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Pesan"
              required
            ></textarea>
            <button
              type="submit"
              value="Send Message"
              className="primary-button"
            >
              <span>Kirim</span>
              <span><MdSend /></span>
            </button>
          </form>
        </motion.div>
        <motion.div
          className=""
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && "visible"}
          variants={kontakAnimation}
        >
          <div className="flex items-center my-6">
            <FaPhoneAlt className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaPhoneAlt>
            <h3 className="font-medium text-primary">+62 821 2566 4554</h3>
          </div>
          <div className="flex items-center my-6">
            <MdEmail className="text-3xl mr-8 hover:text-primary cursor-pointer duration-300"></MdEmail>
            <h3 className="font-medium text-primary">info@msnproduction.com</h3>
          </div>
          <div className="flex items-center my-6">
            <FaClock className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaClock>
            <h3 className="font-medium text-primary">Senin – Minggu, 09:00 – 17:00</h3>
          </div>
          <div className="flex items-center my-6">
            <FaLocationArrow className="text-4xl mr-8 hover:text-primary cursor-pointer duration-300"></FaLocationArrow>
            <h3 className="font-medium text-primary">
              Kp. Cigintung RT 010 RW 004, Ds. Kertasari, Kec. Pangkalan,
              Kab. Karawang, Jawa Barat, 41362
            </h3>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <Map />
      </motion.div>
    </div>
  );
};

export default Kontak;
