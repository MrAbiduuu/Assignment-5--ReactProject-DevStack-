import React from "react";
import type { dataTypes } from "../Types/Types";
import { FaStar } from "react-icons/fa";

const AvailableTech = ({ Technology }) => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-4">
      <div className="lg:col-span-3">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Technology.map((Tech: dataTypes) => (
            <div className="p-5 border rounded-2xl">
              <div className="flex justify-between">
                <img src={Tech.icon} alt={Tech.name} />
                <p>{Tech.type}</p>
              </div>
              <h1 className="text-2xl font-bold">{Tech.name}</h1>
              <p>{Tech.description}</p>
              <hr className="text-gray-400" />
              <div className="flex justify-between">
                <p>{Tech.category}</p>
                <p>{Tech.environment}</p>
                <p className="flex text-center align-bottom">
                  <FaStar className="text-[#FBBF24]" />
                  {Tech.rating}
                </p>
              </div>
              <div className="text-center">
                <button className="btn btn-active bg-black text-white rounded-field w-full">
                  Add to stack
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-1">
        <div className="rounded-2xl border p-6">
          <h2 className="text-2xl font-bold">My Stack</h2>
        </div>
      </div>
    </div>
  );
};

export default AvailableTech;
