import { useState } from "react";
import Logo from "../assets/logo-text.png";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 mx-auto flex h-20 max-w-7xl items-center bg-white px-4 shadow-md sm:px-6 lg:px-8">
      <button
        className="text-2xl text-[#334155] md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FiMenu />
      </button>

      <div className="absolute left-1/2 -translate-x-1/2 md:static md:mr-auto md:translate-x-0">
        <img src={Logo} alt="DevStackLogo" className="h-9 w-auto sm:h-10" />
      </div>

      <div className="hidden gap-6 font-medium text-[#475569] md:flex">
        <a href="" className="text-[#D91B7E]">
          Home
        </a>
        <a href="">Technologies</a>
        <a href="">Projects</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>

      <div className="ml-auto flex gap-2 font-extrabold sm:gap-4">
        <button className="btn rounded-xl px-3 text-[#334155] sm:px-4">
          Sign In
        </button>

        <button className="btn rounded-2xl bg-[#D91B7E] px-3 text-white sm:px-4">
          Sign Up
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 top-20 w-full bg-white px-6 py-5 shadow-md md:hidden">
          <div className="flex flex-col gap-4 font-medium text-[#475569]">
            <a href="" className="text-[#D91B7E]">
              Home
            </a>

            <a href="">Technologies</a>
            <a href="">Projects</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
