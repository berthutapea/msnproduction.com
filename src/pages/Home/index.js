import React from "react";
import { Banner, Service, Testimonial, Informasi } from "../../components";
import Paket from "../Paket";
import Kontak from "../Kontak";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <Service />
      <Paket />
      <Testimonial />
      <Informasi />
      <Kontak />
    </div>
  );
};

export default Home;