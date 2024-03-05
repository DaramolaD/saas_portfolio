import React from "react";
import { kaushanScript } from "@/app/font";

const Footer = () => {
  return (
    <div className="bg-bg1-normal w-full h-fit flex justify-center py-5">
      <div className="max-w-screen-2xl gap-12 w-full flex items-center flex-col px-5">
        <div className="flex w-full items-start ">
          <h4
            className={`${kaushanScript.className} text-white text-lg 2xl:text-2xl`}
          >
            Other places you can find me on the web:
          </h4>
        </div>
        <p className="text-white71">@2024</p>
      </div>
    </div>
  );
};

export default Footer;
