import React from "react";
import { Outlet } from "react-router-dom";
// import BottomLine from "../../components/BottomLine/BottomLine";

const Blog = () => {
  return (
    <div className="px-2 md:px-12 py-16 min-h-screen ">
      {/* <h1 className="text-3xl font-semibold text-center">
        Informasi <span className="text-primary">Terbaru</span>
      </h1> */}
      {/* <BottomLine /> */}
      <Outlet />
    </div>
  );
};

export default Blog;
