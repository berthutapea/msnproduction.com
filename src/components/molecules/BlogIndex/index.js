import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import placeholderImage from "../../../assets/images/placeholder.jpg";
import blogs from "../../../utils/blogs";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { BottomLine } from "../../../components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";

const BlogIndex = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();;
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
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

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  return (
    <div className="py-16 parent">
      <motion.div
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h1 className="text-3xl font-semibold text-center">
          Informasi <span className="text-primary">Terbaru</span>
        </h1>
        <BottomLine />
      </motion.div>
      <div className="mt-10">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={sectionBodyAnimation}
        >
          {currentBlogs.map((blog) => {
            const { _id, title, date, img, description, path } = blog;
            return (
              <div
                key={_id}
                className="flex flex-col items-center justify-between w-full gap-8 rounded-lg min-h-32"
              >
                <div className="w-full">
                  <Link to={"/blog/" + path}>
                    <LazyLoadImage
                      placeholderSrc={placeholderImage}
                      src={img}
                      className="rounded-lg cursor-pointer blog_image"
                    />
                  </Link>
                </div>
                <div className="w-full">
                  <h2 className="text-[22px] font-medium text-accent cursor-pointer hover:text-primary mt-[-25px]">
                    <Link to={"/blog/" + path}>{title}</Link>
                  </h2>
                  <span className="text-sm text-gray-600">
                    <p>{date}</p>
                  </span>
                  <p className="mt-1 mb-6 text-accent">
                    {description?.slice(0, 80)} ...
                  </p>

                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <button
          onClick={handlePreviousPageClick}
          disabled={currentPage === 1}
          className="flex items-center gap-3 text-black duration-500 bg-transparent border-2 btn border-primary hover:bg-primary hover:border-transparent hover:text-white"
        >
          <FaAngleDoubleLeft />
        </button>
        <span className="px-4 text-2xl text-accent">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNextPageClick}
          disabled={currentPage === totalPages}
          className="flex items-center gap-3 text-white duration-500 border-2 btn bg-primary hover:bg-transparent hover:border-primary hover:text-black"
        >
          <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default BlogIndex;
