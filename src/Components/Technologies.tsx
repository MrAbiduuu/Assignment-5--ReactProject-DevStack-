import React, { use } from "react";
import type { dataTypes } from "../Types/Types";
import AvailableTech from "./AvailableTech";

interface TechProps {
  TechPromise: Promise<dataTypes[]>;
}

const Technologies = ({ TechPromise }: TechProps) => {
  const Technology = use(TechPromise);
  console.log(Technology);
  return (
    <div className="mx-auto min-h-150 max-w-7xl items-center px-6 py-16 grid-cols-1">
      <div className="py-10">
        <h1 className="font-bold text-3xl">
          Explore the
          <span className="font-bold bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent ml-2">
            Technologies
          </span>
        </h1>
        <p className="text-gray-400">
          Pick one technolog per category to build your ideal stack
        </p>
      </div>
      <AvailableTech Technology={Technology} />
    </div>
  );
};

export default Technologies;
