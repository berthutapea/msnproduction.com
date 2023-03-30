import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import placeholderImage from "../../assets/images/placeholder.jpg";
import blogs from "../../utils/blogs";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import BottomLine from "../../components/BottomLine";

const BlogIndex = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Menyortir posting blog dari yang terbaru ke yang terlama
    .slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handleNextPageClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPageClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mt-20">
      <h1 className="text-3xl font-semibold text-center">
        Informasi <span className="text-primary">Terbaru</span>
      </h1>
      <BottomLine />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentBlogs.map((blog) => {
          const { _id, title, date, img, description, path } = blog;
          return (
            <div
              key={_id}
              className="flex flex-col w-full items-center justify-between gap-8 rounded-lg min-h-32"
            >
              <div className="w-full">
                <Link to={"/blog/" + path}>
                  <LazyLoadImage
                    placeholderSrc={placeholderImage}
                    src={img}
                    className="rounded-lg blog_image cursor-pointer"
                  />
                </Link>
              </div>
              <div className="w-full">
                <h2 className="text-[22px] font-medium text-accent cursor-pointer hover:text-primary">
                  <Link to={"/blog/" + path}>{title}</Link>
                </h2>
                <span className="text-gray-600 text-sm">
                  <p>{date}</p>
                </span>
                <p className="text-accent mt-1 mb-6">
                  {description?.slice(0, 80)} ...
                </p>
                {/* <Link to={"/blog/" + path}> */}
                {/* <button className="px-6 py-1 border-accent border rounded hover:border-primary duration-300">
                    Read More
                  </button> */}
                {/* </Link> */}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={handlePreviousPageClick}
          disabled={currentPage === 1}
          className="btn text-black flex items-center gap-3 border-2 border-primary bg-transparent hover:bg-primary hover:border-transparent hover:text-white duration-500"
        >
          <FaAngleDoubleLeft />
        </button>
        <span className="text-accent text-2xl px-4">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNextPageClick}
          disabled={currentPage === totalPages}
          className="btn text-white flex items-center gap-3 border-2 bg-primary hover:bg-transparent hover:border-primary hover:text-black duration-500"
        >
          <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default BlogIndex;
