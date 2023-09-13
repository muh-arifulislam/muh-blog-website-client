import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-md">
      <div className="max-w-[1200px] mx-auto py-[1rem]  flex justify-between items-center relative">
        <a href="#" className="text-2xl">
          MUH.
        </a>
        <ul className="lg:flex md:flex gap-[20px] text-md  hidden">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/reading-history">Reading History</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <a
          href="/subscribe"
          className="lg:inline md:inline hidden px-5 py-2 bg-slate-400 rounded-md text-white"
        >
          Subscribe
        </a>
        <button className="lg:hidden md:hidden inline">X</button>
        {/* MOBILE VIEW  */}
        <div className="lg:hidden md:hidden hidden px-[10px] bg-slate-300 absolute right-[2rem] bottom-[-160%]">
          <ul className="">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/reading-history">Reading History</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
