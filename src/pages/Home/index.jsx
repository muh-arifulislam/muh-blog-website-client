import React from "react";
import BlogCard from "../../components/BlogCard";
import Searchbar from "./Searchbar";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Button from "../../components/Button";
import Carousel from "./Carousel";
const Home = () => {
  return (
    <div className=" bg-[#F2F4F7]">
      <div>
        <Searchbar></Searchbar>
      </div>
      <div className="max-w-[980px] mx-auto ">
        <Carousel></Carousel>
      </div>
      <div className="py-[40px] lg:max-w-[980px] lg:mx-auto mx-[20px] grid grid-cols-1 gap-y-[15px]">
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
        <BlogCard></BlogCard>
      </div>
      <div className="max-w-[980px] mx-auto px-5 flex justify-end pb-[40px]">
        <button className="text-lg px-5  py-2 rounded-sm bg-slate-600 flex items-center gap-x-2 text-white">
          <span>Load More</span>
          <BsFillArrowDownCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Home;
