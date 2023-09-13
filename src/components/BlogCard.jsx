import React from "react";
import thumImage from "../assets/images/Article Thumbnail.png";
const BlogCard = () => {
  return (
    <div className="flex lg:flex-row md:flex-row flex-col gap-x-[40px] lg:p-[30px] md:p-[30px] p-0 rounded-xl bg-white shadow-sm">
      <div className="flex flex-col justify-between lg:p-0 md:p-0 p-[15px] ">
        <h4 className="text-[13px] lg:mb-0 md:mb-0 mb-[10px] font-semibold">AUGust 13, 2021 </h4>
        <div>
          <h2 className="text-[26px] font-semibold leading-[130%] ">
            10 Hilarious Cartoons That Depict Real-Life Problems of Programmers
          </h2>
          <p className="mt-[30px] lg:block md:block hidden">
            Redefined the user acquisition and redesigned the onboarding
            experience, all within 3 working weeks.
          </p>
        </div>
      </div>
      <div>
        <img
          className="lg:max-w-[300px] lg:w-auto md:w-auto w-[100%]"
          src={thumImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default BlogCard;
