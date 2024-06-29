import React from "react";
import { Button } from "./ui/button";
import { kaushanScript, syne } from "@/app/font";
import { CalendarIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full bg-bg2-100 h-full pb-[100px] pt-40 sm:pt-[200px] flex items-center justify-center">
      <div className="max-w-screen-2xl">
        <div className="items-center justify-center flex flex-col w-full max-w-screen-2xl px-5 sm:px-10 gap-8">
          <div className="grid gap-2 justify-items-center">
            <div className="flex gap-2 md:gap-5 items-center text-white border border-primary/40 p-1 py-[2px] pr-[2px] md:pr-1 sm:py-0 md:py-1 pl-4 rounded-full">
              <p className="text-base sm:text-lg lg:text-2xl font-medium">
                Hi I&apos;m Daniel
              </p>
              <span className="flex gap-5 text-nowrap bg-emerald-50/5 text-white flex-nowrap w-fit px-2 pl-1 md:pl-3 pr-2 md:pr-3 pt-[2px] pb-[3px] items-center justify-center border border-primary-darkActive rounded-full">
                <div className="flex items-center gap-2">
                  <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  <p className="text-xs md:text-base text-nowrap text-white italic w-full">
                    Currently Available!
                  </p>
                </div>
              </span>
            </div>
            {/* <h1
              className={`text-[44px] text-balance !leading-tight md:text-6xl 2xl:text-7xl 2xl:leading-normal text-center bg-gradient-to-b from-primary to-white bg-clip-text text-transparent ${syne.className}`}
            >
              Got a SaaS Product That Users Avoid? <br /> Your Product Deserves
              Better.
            </h1> */}
            <h1
              className={`text-[44px] text-balance !leading-tight md:text-6xl 2xl:text-7xl 2xl:leading-normal text-center bg-gradient-to-b from-primary to-white bg-clip-text text-transparent ${syne.className}`}
            >
              Struggling to Keep Users Engaged with Your SaaS Product?
            </h1>
          </div>
          <p className="text-white text-xl md:text-2xl 2xl:text-3xl 2xl:leading-normal text-center font-light leading-normal max-w-[1000px]">
            I help SaaS companies create products that stick with intuitive
            UI/UX design and seamless Next.js development
          </p>
          {/* <p className="text-white text-xl md:text-2xl 2xl:text-3xl 2xl:leading-normal text-center font-light leading-normal max-w-[1000px]">
            Your Product Deserves a Stellar User Experience. Let&apos;s Make It
            Happen
          </p> */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center cta gap-8">
            <Button variant="default" size="lg" className="px-6 md:px-8">
              <span className="text-sm lg:text-lg">
                Let&apos;s Discuss Your Project.
              </span>
              <CalendarIcon className="ml5" />
            </Button>
            <Button variant="outline" size="lg" className="px-6 md:px-8">
              <Link href="/#projects" className=" leading-none">
                <span className="text-sm lg:text-lg">Projects</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
