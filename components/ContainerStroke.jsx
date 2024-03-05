import { kaushanScript } from "@/app/font";
import React from "react";

const ContainerStroke = ({ children }) => {
  return (
    <div className="absolute z-1 right-1/4 top-10">
      <h4 className={` text-transparent ${kaushanScript.className} stroke text-[15rem] stroke-1 opacity-15`}>{children}</h4>
    </div>
  );
};

export default ContainerStroke;
