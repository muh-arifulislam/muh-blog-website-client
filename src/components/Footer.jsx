import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="p-[40px] border-b">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-extrabold mb-[10px] text-transparent bg-clip-text bg-gradient-to-br from-[#C41740] to-[#EA9C28] text-center">
            Personally Newsletter
          </h2>
          <p className="text-lg font-semibold lg:w-[40%] md:w-[40%] w-full text-center">
            A bi-weekly newsletter of design inspiration, resources and anything
            related to career development.
          </p>
          <div className="mt-[30px] flex">
            <input
              className="w-[100%] max-w-xs p-2 border rounded-l-md text-lg outline-none"
              type="text"
              placeholder="Email address"
            />
            <button className="bg-green-600 rounded-r-md text-xl px-4 py-2 outline-none">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="p-[20px] text-center">
        <p>
          <small>Copyright 2023 - Md. Ariful Islam</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
