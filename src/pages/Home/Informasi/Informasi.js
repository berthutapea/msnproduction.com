import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import placeholderImage from "../../../assets/images/placeholder.jpg";
import blogs from "../../../utils/blogs";
import BottomLine from "../../../components/BottomLine";
import { FaAngleRight } from "react-icons/fa";

const Informasi = () => {
    const [currentPage] = useState(1);
    const [blogsPerPage] = useState(3);
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // const totalPages = Math.ceil(blogs.length / blogsPerPage);

    // const handleNextPageClick = () => {
    //     if (currentPage < totalPages) {
    //         setCurrentPage(currentPage + 1);
    //     }
    // };

    // const handlePreviousPageClick = () => {
    //     if (currentPage > 1) {
    //         setCurrentPage(currentPage - 1);
    //     }
    // };

    return (
        <div className=" parent py-20">
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
                            className="flex flex-col w-full items-center justify-between gap-8 my-2 rounded-lg min-h-32"
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
                                <h2 className="text-2xl font-medium text-accent cursor-pointer hover:text-primary">
                                    <Link to={"/blog/" + path}>{title}</Link>
                                </h2>
                                <span className="text-gray-600 text-sm">
                                    <p>{date}</p>
                                </span>
                                <p className="text-accent mt-2 mb-6">
                                    {description?.slice(0, 150)} ...
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Link
                to="/blog"
                className="text-1xl hover:text-primary duration-300"
            >
                <button className="primary-button ">
                    <span>Lihat Semua</span>
                    <span>
                        <FaAngleRight />
                    </span>
                </button>
            </Link>
        </div>
    );
};

export default Informasi;
