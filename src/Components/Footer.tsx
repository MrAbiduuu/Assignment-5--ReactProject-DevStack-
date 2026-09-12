import React from "react";
import Logo from "../assets/logo-text.png";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 mx-auto max-w-7xl items-center px-6 py-16 ">
      <div className="flex justify-between mb-15">
        {/* Dev stack  */}
        <div>
          <img src={Logo} alt="Dev stack" />
          <p className="my-4 text-[#64748B]">
            Created tools, technologies, and rosources for developers building{" "}
            <br />
            mordern software
          </p>
          <div className="flex gap-4 text-[#64748B] font-semibold">
            <button className="btn bg-transparent">Github</button>
            <button className="btn bg-transparent">Twitter</button>
            <button className="btn bg-transparent">Linkedin</button>
          </div>
        </div>
        {/* Product  */}
        <div className="text-[#64748B]">
          <h1 className="font-semibold text-xl text-[#0F172A] mb-5">Product</h1>
          <div className="grid grid-rows-3">
            <a href="">Home</a>
            <a href="">Technologies</a>
            <a href="">Projects</a>
          </div>
        </div>

        {/* Reserved  */}
        <div className="text-[#64748B]">
          <h1 className="font-semibold text-xl text-[#0F172A] mb-5">
            Reserved
          </h1>
          <div className="grid grid-rows-3">
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Career</a>
          </div>
        </div>

        {/* privacy  */}
        <div className="text-[#64748B]">
          <h1 className="font-semibold text-xl text-[#0F172A] mb-5">Privacy</h1>
          <div className="grid grid-rows-3">
            <a href="">Privacy policy</a>
            <a href="">Terms and service</a>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-300 text-[#64748B]">
        <p className="flex items-center mt-5 text-[#64748B]">
          <FaRegCopyright />
          2026 DevStack.All rights reserved
        </p>
        <div className="flex gap-4 mt-5">
          <a href="" className="hover:border-b">
            Privacy
          </a>
          <a href="" className="hover:border-b">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
