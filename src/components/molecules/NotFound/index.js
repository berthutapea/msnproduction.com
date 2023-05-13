import React from "react";
import { PrimaryBtn } from "../../../components";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen md:flex-row">
      <h1 className="text-[8rem] font-bold text-primary">404</h1>
      <div className="w-24 h-1 my-6 md:w-1 md:h-24 bg-primary md:my-0 md:mx-8"></div>
      <div className="flex flex-col items-center">
        <h2 className="mb-4 text-2xl text-center">
          Maaf, halaman ini tidak tersedia !
        </h2>
        <Link to="/">
          <PrimaryBtn>
            <span>Kembali ke Beranda</span>
            <span>
              <FaHome></FaHome>
            </span>
          </PrimaryBtn>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
