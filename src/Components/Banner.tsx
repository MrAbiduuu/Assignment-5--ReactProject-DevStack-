import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-150 max-w-7xl items-center px-6 py-16 lg:px-8"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-2">
        <div className="contents lg:block">
          <p className="order-1 mb-4 text-center text-5xl font-bold lg:text-left">
            Build Your Ideal
          </p>

          <h1 className="order-2 text-center text-5xl font-bold bg-linear-to-r from-orange-500 via-pink-500 to-indigo-600 bg-clip-text text-transparent lg:text-left">
            Development Stack
          </h1>

          <p className="order-3 mt-6 max-w-lg text-left text-lg leading-8 text-gray-500 lg:text-center">
            Explore fontend, backend, database, and tooling options, Compare
            them side by side and put together the stack that fits your next
            project
          </p>

          <div className="order-5 mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-lg bg-pink-500 px-6 py-3 font-semibold text-white transition hover:bg-pink-600">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-pink-500 hover:text-pink-500">
              Learn More
            </button>
          </div>
        </div>

        <div className="order-4 flex justify-center lg:order-0">
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
