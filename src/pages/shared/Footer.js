import React from "react";
import logoMSN from "../../assets/images/MSN-PRODUCTION-LOGO.png";
import { Link } from 'react-router-dom'
import {
  FaPhoneAlt,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-20 text-base-100"
        style={{ backgroundColor: "#e5e7eb" }}
      >
        <div>
          <Link to='/'><img src={logoMSN} alt="MSN PRODUCTION" className="sm:w-46 w-32" /></Link>
          <h1 className=" text-accent text-2xl font-bold">MSN PRODUCTION</h1>
          <span className="text-accent">Kp. Cigintung RT 010 RW 004, <br />
            Ds. Kertasari, Kec. Pangkalan, <br />
            Kab. Karawang Jawa Barat, 41362.</span>
          <div className="flex items-center my-1">
            <FaPhoneAlt className="text-2xl mr-6 text-accent"></FaPhoneAlt>
            <h3 className="font-medium text-accent">+62 821 2566 4554</h3>
          </div>
          <div className="flex items-center my-1">
            <MdEmail className="text-2xl mr-6 text-accent"></MdEmail>
            <h3 className="font-medium text-accent">info@msnproduction.com</h3>
          </div>
        </div>
        <div>
          <span className="font-bold text-black">Tautan</span>
          <a className="link link-hover hover:text-primary text-accent">Beranda</a>
          <a className="link link-hover hover:text-primary text-accent">Jasa</a>
          <a className="link link-hover hover:text-primary text-accent">Tentang</a>
          <a className="link link-hover hover:text-primary text-accent">Paket</a>
          <a className="link link-hover hover:text-primary text-accent">Artikel</a>
          <a className="link link-hover hover:text-primary text-accent">Kontak</a>
        </div>
        <div>
          <span className="font-bold text-accent">Fokus & Layanan</span>
          <a className="link link-hover hover:text-primary text-accent">Web Wedding</a>
          <a className="link link-hover hover:text-primary text-accent">Web E-Commerce</a>
          <a className="link link-hover hover:text-primary text-accent">Web Company Profile</a>
          <a className="link link-hover hover:text-primary text-accent">Web & Mobile Applications</a>
          <a className="link link-hover hover:text-primary text-accent">Branding & Content Creative</a>
          <a className="link link-hover hover:text-primary text-accent">Digital Marketing & Advertising</a>
        </div>
        <div className="mt-4 flex items-center">
          <a
            href="https://www.linkedin.com/in/mulia-sejati-nusantara-production-a766b3258/"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=100088222058988"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaFacebookSquare></FaFacebookSquare>
          </a>
          <a
            href="https://twitter.com/MSN_Production"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaTwitterSquare></FaTwitterSquare>
          </a>
          <a
            href="https://www.instagram.com/msn.production/"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaInstagramSquare></FaInstagramSquare>
          </a>
        </div>
      </footer>
      <footer className="text-sm text-center px-10 py-6 text-base-100 border-base-300 bg-neutral ">
        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-6 text-accent">
          <p>&copy; Copyright 2022, MSN PRODUCTION - PT. Mulia Sejati Nusantara. All Rights Reserved</p>
        </div>

      </footer>
    </div>
  );
};

export default Footer;