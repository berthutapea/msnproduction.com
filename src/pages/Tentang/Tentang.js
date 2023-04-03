import React from "react";
import TentangKami from "./TentangKami/TentangKami";
import VisiMisi from "./VisiMisi/VisiMisi";
import Tim from "./Tim/Tim";

const Tentang = () => {
  return (
    <div className="pt-16">
      <TentangKami />
      <VisiMisi />
      <Tim />
    </div>
  );
};

export default Tentang;