import React from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { BiSortDown, BiSortUp } from "react-icons/bi";
const Searchbar = () => {
  return (
    <div className="flex justify-center p-[30px] ">
      <div>
        <p className="text-2xl font-semibold">
          Hello, What Do You Want To Learn?
        </p>
        <div className="mt-[20px] flex">
          <input
            className="w-[100%] max-w-xs p-2 rounded-l-md text-lg outline-none"
            type="text"
            placeholder="Search Your Article"
          />
          <button className="bg-green-600 rounded-r-md text-xl px-4 py-2 outline-none">
            Search
          </button>
        </div>
        <div className="mt-[30px] flex lg:flex-row md:flex-row flex-col justify-evenly gap-y-[20px]">
          <button className="px-3 py-2 bg-white font-semibold rounded-sm flex items-center gap-x-2">
            <span>Older posts first</span>
            <BiSortDown />
          </button>
          <button className="px-3 py-2 bg-white font-semibold rounded-sm flex items-center gap-x-2">
            <span>Newer posts first</span>
            <BiSortUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
