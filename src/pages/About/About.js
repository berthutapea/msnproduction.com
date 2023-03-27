import React from "react";
import Tentang from "./Tentang/Tentang";
import VisiMisi from "./VisiMisi/VisiMisi";
import Tim from "./Tim/Tim";

const About = () => {
  return (
    <div className="pt-16">
      <Tentang />
      <VisiMisi />
      <Tim />
    </div>
  );
};

export default About;