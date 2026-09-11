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
    <div>
      <AvailableTech Technology={Technology} />
    </div>
  );
};

export default Technologies;
