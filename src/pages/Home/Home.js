import React from "react";
import Contact from "../Contact/Contact";
import Paket from "../Paket/Paket";
import Banner from "./Banner/Banner";
import Informasi from "./Informasi/Informasi";
import Service from "./Service/Service";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <Service />
      <Paket />
      <Testimonial />
      <Informasi />
      <Contact />
    </div>
  );
};

export default Home;
