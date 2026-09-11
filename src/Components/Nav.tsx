import React from "react";
import Logo from "../assets/logo-text.png";
// import { FiMenu } from "react-icons/fi";
const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 mx-auto flex h-20 max-w-7xl items-center justify-between bg-white px-6 shadow-md lg:px-8">
      <div>
        <img src={Logo} alt="DevStackLogo" />
      </div>

      <div className="flex gap-4 font-medium text-[#475569]">
        <a href="" className="text-[#D91B7E]">
          Home
        </a>
        <a href="">Technologies</a>
        <a href="">Projects</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>

      <div className="flex gap-4 font-extrabold">
        <button className="btn rounded-xl text-[#334155]">Sign In</button>

        <button className="btn rounded-2xl bg-[#D91B7E] text-white">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Nav;
