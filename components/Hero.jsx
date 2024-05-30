import React from "react";
import { Button } from "./ui/button";
import { kaushanScript } from "@/app/font";
import { CalendarIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full bg-bg2-100 h-full pb-[100px] pt-40 sm:pt-[200px] flex items-center justify-center">
      <div className="max-w-screen-2xl">
        <div className="items-center justify-center flex flex-col w-full max-w-screen-2xl px-5 sm:px-10 gap-8">
          <h1
            className={`text-[44px] text-balance !leading-tight md:text-6xl 2xl:text-7xl 2xl:leading-normal text-center bg-gradient-to-b from-primary to-white bg-clip-text text-transparent ${kaushanScript.className}`}
          >
            Accelerate Your
            <span className=""> Startup&apos;s Growth</span> <br />
            with Frontend Excellence
          </h1>
          <p className="text-white text-xl md:text-2xl 2xl:text-3xl 2xl:leading-normal text-center font-light leading-normal max-w-[800px]">
          Transform Your Digital Presence:
          Enhance Performance and User Experience
          </p>
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center cta gap-8">
            <Button variant="default" size="lg">
              <span className="text-lg">Schedule A Call</span>
              <CalendarIcon className="ml5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
            >
              <Link href="/#projects">
                <span className="text-lg">Projects</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
