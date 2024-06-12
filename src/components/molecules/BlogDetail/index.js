import React from "react";
import { useParams } from "react-router-dom";
import placeholderImage from "../../../assets/images/placeholder.jpg";
import blogs from "../../../utils/blogs";
import { useState } from "react";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FiExternalLink } from "react-icons/fi";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

const BlogDetail = () => {
  const { blog_path } = useParams();
  const [blog, setBlog] = useState({});
  const url = window.location.href;

  useEffect(() => {
    const current_blog = blogs.find((blog) => blog.path === blog_path);
    setBlog(current_blog);
  }, [blog_path]);

  return (
    <div className="mt-20">
      <h1 className="text-4xl text-center t">{blog?.title}</h1>
      <div className="my-8 text-center">
        <LazyLoadImage
          placeholderSrc={placeholderImage}
          src={blog?.img}
          alt="Blog Main Image"
          className="main_blog_image"
        />
      </div>
      <div className="flex flex-wrap items-center justify-between mt-16 mb-4">
        <span>
          <strong className="text-primary">MSN PRODUCTION</strong>
        </span>
        <span>
          <strong className="text-primary">{blog?.date}</strong>
        </span>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="md:col-span-2 lg:col-span-3">
          {blog?.description?.split("\n")?.map((s, i) => (
            <React.Fragment key={i + 1}>
              <p className="text-justify text-accent">{s}</p>
              <br />
            </React.Fragment>
          ))}
        </div>
        <div className="px-4 py-6 rounded shadow-lg md:col-span-2 lg:col-span-1">
          <div className="">
            <h4 className="mb-3 text-lg font-medium">Lainnya:</h4>
            <p className="flex items-center gap-3">
              <span>
                <SiInstagram />
              </span>
              <a
                href={blog?.instagram_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:underline"
              >
                <span>Instagram</span> <FiExternalLink />
              </a>
            </p>
            <p className="flex items-center gap-3">
              <span>
                <SiLinkedin />
              </span>
              <a
                href={blog?.linkedin_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:underline"
              >
                <span>LinkedIn</span> <FiExternalLink />
              </a>
            </p>
          </div>

          <div className="w-full h-[1px] bg-neutral my-6"></div>

          <h4 className="mb-3 text-lg font-medium">
            Bagikan:{" "}
          </h4>
          <div className="flex flex-wrap items-center gap-4">
            <EmailShareButton url={url} title="MSN PRODUCTION -">
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
            <FacebookShareButton url={url} title="MSN PRODUCTION -">
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={url} title="MSN PRODUCTION -">
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <LinkedinShareButton url={url} title="MSN PRODUCTION -">
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <WhatsappShareButton url={url} title="MSN PRODUCTION -">
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
          </div>

          <div className="w-full h-[1px] bg-neutral my-6"></div>

          <h4 className="mb-3 text-lg font-medium">Tag: </h4>
          <div>
            {blog?.tags?.map((tag) => (
              <button
                key={tag}
                className="px-2 py-0 m-1 bg-gray-300 rounded text-primary bg-opacity-40"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
