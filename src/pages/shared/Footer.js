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
      <footer className="footer p-10 text-base-100"
        style={{ backgroundColor: "#e5e7eb" }}
      >
        <div>
          <Link to='/'><img src={logoMSN} alt="MNS PRODUCTION" className="sm:w-46 w-32" /></Link>
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
          <span className="footer-title text-accent">Tautan</span>
          <a className="link link-hover text-accent">Beranda</a>
          <a className="link link-hover text-accent">Jasa</a>
          <a className="link link-hover text-accent">Tentang</a>
          <a className="link link-hover text-accent">Paket</a>
          <a className="link link-hover text-accent">Artikel</a>
          <a className="link link-hover text-accent">Kontak</a>
        </div>
        <div>
          <span className="footer-title text-accent">Fokus & Layanan</span>
          <a className="link link-hover text-accent">Web Wedding</a>
          <a className="link link-hover text-accent">Web E-Commerce</a>
          <a className="link link-hover text-accent">Web Company Profile</a>
          <a className="link link-hover text-accent">Web & Mobile Applications</a>
          <a className="link link-hover text-accent">Branding & Content Creative</a>
          <a className="link link-hover text-accent">Digital Marketing & Advertising</a>
        </div>
        <div className="mt-4 flex items-center">
          <h3 className="text-lg text-accent">Social</h3>
          <div className="bg-accent w-12 h-[2px] mx-4"></div>
          <a
            href="https://linkedin.com/in/gilberthutapea"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            href="https://www.github.com/berthutapea"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaFacebookSquare></FaFacebookSquare>
          </a>
          <a
            href="https://twitter.com/GilbertHutapeaa"
            target="blank"
            className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
          >
            <FaTwitterSquare></FaTwitterSquare>
          </a>
          <a
            href="https://www.instagram.com/bethup97/"
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
          <p>&copy; Copyright 2023, MSN PRODUCTION - PT. Mulia Sejati Nusantara. All Rights Reserved</p>
        </div>

      </footer>
    </div>
  );
};

export default Footer;