import React from "react";
import type { dataTypes } from "../Types/Types";
import { FaStar } from "react-icons/fa";

const AvailableTech = ({ Technology }) => {
  return (
    <div className="mx-auto grid grid-cols-3 min-h-150 max-w-7xl items-center px-6 py-16 lg:px-8 gap-2">
      {Technology.map((Tech: dataTypes) => (
        <div className="p-5 border-1 rounded-2xl">
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
  );
};

export default AvailableTech;
