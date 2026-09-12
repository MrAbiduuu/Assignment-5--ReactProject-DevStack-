import { useState } from "react";
import type { dataTypes } from "../Types/Types";
import { FaStar } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { RiDeleteBin6Line } from "react-icons/ri";

const AvailableTech = ({ Technology }) => {
  const [isTechAdded, setIsTechAdded] = useState<string[]>([]);
  const [stack, setStack] = useState<dataTypes[]>([]);

  const handleAddTech = (Tech: dataTypes, name: string) => {
    setIsTechAdded((prev) => [...prev, name]);
    setStack((prev) => [...prev, Tech]);

    toast.success(`${Tech.name} Added Successfully`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleRemoveAll = () => {
    setStack([]);
    setIsTechAdded([]);

    toast.success("All technologies removed", {
      position: "bottom-right",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
      <div className="lg:col-span-3">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Technology.map((Tech: dataTypes) => (
            <div
              key={Tech.name}
              className={`rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                isTechAdded.includes(Tech.name)
                  ? "border-pink-600"
                  : "border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <img
                  className="h-12 w-12 object-contain"
                  src={Tech.icon}
                  alt={Tech.name}
                />

                <p
                  className="rounded-full px-3 py-1 text-sm"
                  style={{
                    backgroundColor: `${Tech.color}20`,
                    color: Tech.color,
                  }}
                >
                  {Tech.type}
                </p>
              </div>

              <h1 className="mt-5 text-2xl font-bold text-gray-900">
                {Tech.name}
              </h1>

              <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
                {Tech.description}
              </p>

              <hr className="my-5 border-gray-200" />

              <div className="flex items-center justify-between gap-3 text-sm text-gray-500">
                <p className="rounded-b-sm bg-gray-100 px-2 py-1 font-semibold text-[#475569]">
                  {Tech.category}
                </p>

                <p>{Tech.environment}</p>

                <p className="flex items-center gap-1 font-medium text-gray-700">
                  <FaStar className="text-[#FBBF24]" />
                  {Tech.rating}
                </p>
              </div>

              <button
                onClick={() => handleAddTech(Tech, Tech.name)}
                disabled={isTechAdded.includes(Tech.name)}
                className="btn btn-active mt-4 w-full rounded-xl bg-black text-white transition-all duration-300 hover:bg-gray-800 disabled:cursor-not-allowed! disabled:bg-gray-400 disabled:text-gray-200 disabled:hover:bg-gray-400"
              >
                {isTechAdded.includes(Tech.name) ? (
                  <p className="flex items-center gap-2">
                    <GiCheckMark />
                    Added to stack
                  </p>
                ) : (
                  <p>Add to stack</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="rounded-2xl border p-6">
          <h2 className="text-2xl font-bold">Your Stack</h2>

          <p className="py-4 mt-2 text-sm text-[#94A3B8]">
            {stack.length === 0
              ? "No technology"
              : stack.length === 1
                ? `${stack.length} technology`
                : `${stack.length} technologies`}{" "}
            selected
          </p>

          {stack.length === 0 ? (
            <>
              <p className="w-full rounded-3xl border p-8 text-center text-[#94A3B8]">
                Your stack is Empty
              </p>
            </>
          ) : (
            <>
              <div className="mt-5 space-y-3">
                {stack.map((Tech) => (
                  <div
                    key={Tech.name}
                    className="flex items-center justify-between gap-3 rounded-xl border py-1.5 px-3"
                  >
                    <div className="flex gap-2">
                      <img
                        src={Tech.icon}
                        alt={Tech.name}
                        className="h-10 w-10 object-contain"
                      />

                      <div>
                        <h3 className="font-semibold">{Tech.name}</h3>
                        <p className="text-sm text-gray-500">{Tech.type}</p>
                      </div>
                    </div>
                    <RiDeleteBin6Line />
                  </div>
                ))}
              </div>

              <button
                onClick={handleRemoveAll}
                className="mt-5 w-full rounded-xl bg-red-500 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-red-600"
              >
                Remove All
              </button>
            </>
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AvailableTech;
