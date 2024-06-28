import React from "react";
import { syne } from "@/app/font";
import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-bg1-normal w-full h-fit flex justify-center py-5">
      <div className="max-w-screen-2xl gap-12 w-full flex items-center flex-col px-5 divide-y divide-primary">
        <div className="flex w-full items-center gap-5">
          <h4 className={`${syne.className} text-white text-lg 2xl:text-2xl`}>
            Other places you can find me on the web:
          </h4>
          <div className="flex items-center gap-5">
            <Link
              href="https://www.linkedin.com/in/daramoladaniel/"
              className="underline text-white hover:text-primary"
            >
              <LinkedInLogoIcon className="w-10 h-10" />
            </Link>
            <Link
              href="https://x.com/dantripled"
              className="underline text-white hover:text-primary"
            >
              <TwitterLogoIcon className="w-10 h-10" />
            </Link>
          </div>
        </div>
        <div className="flex w-full items-center justify-center pt-6">
          <p className="text-white71">@2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
