import React from "react";
import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-150 max-w-7xl items-center px-6 py-16 lg:px-8"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-2">
        {/* Left Side */}
        <div>
          <p className="mb-4 text-5xl font-bold">Build Your Ideal</p>

          <h1 className="text-5xl font-bold bg-linear-to-r from-orange-500 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
            Development Stack
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-500">
            Explore fontend, backend, database, and tooling options, Compare
            them side by side and put together the stack that fits your next
            project
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-lg bg-pink-500 px-6 py-3 font-semibold text-white transition hover:bg-pink-600">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-pink-500 hover:text-pink-500">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={BannerImg}
            alt="BannerImg"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
