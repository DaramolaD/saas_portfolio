"use client";
import React, { useState } from "react";
import { Logo } from "./Icons";
import { Button } from "./ui/button";
import {
  Cross1Icon,
  EyeClosedIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  
  return (
    <div className="w-full fixed top-0 bg-bg1-normal z-50 flex justify-center">
      <div className="flex items-center justify-between max-w-screen-2xl w-full py-5 px-5 sm:px-12">
        <Logo className="w-10 h-10" />
        <div className="hidden md:flex items-center justify-between">
          <Button variant="link" className="text-sm md:text-base lg:text-lg">
            <Link href="/">Home</Link>
          </Button>
          <Button variant="link" className="text-sm md:text-base lg:text-lg">
            <Link href="/#about">About</Link>
          </Button>
          <Button variant="link" className="text-sm md:text-base lg:text-lg">
            <Link href="/#services">Expertise</Link>
          </Button>
          <Button variant="link" className="text-sm md:text-base lg:text-lg" onClick={() => sendGTMEvent({ event: "buttonClicked", value: "xyz"})}>
            <Link href="/#projects">Project</Link>
          </Button>
        </div>

        <Button
          variant="outline"
          size="lg"
          className="hidden md:block bg-transparent"
        >
          <Link href="/#contact">Contact</Link>
        </Button>

        <HamburgerMenuIcon
          className="w-6 h-6 sm:w-8 sm:h-8 md:hidden text-white"
          onClick={handleToggle}
        />

        {toggleMenu && (
          <div className="flex flex-col bg-bg1-normal md:hidden absolute right-0 top-0 w-3/4 h-lvh items-end">
            <Cross1Icon
              className="w-6 sm:w-8 sm:h-8 md:hidden text-white h-20 mr-12"
              onClick={handleToggle}
            />
            <div className="grid divide-y border-primary/50 w-full" onClick={handleToggle}>
              <Link
                href="/"
                className="w-full flex items-center justify-start h-20 hover:bg-primary-nav hover:justify-center transition ease-in-out"
              >
                <p className="w-2/5 text-center text-white">Home</p>
              </Link>
              {/* <div className="w-full border-t-2 border-primary/50"></div> */}
              <Link
                href="/#about"
                className="w-full flex items-center justify-start h-20 hover:bg-primary-nav hover:justify-center"
              >
                <p className="w-3/5 text-center text-white">About</p>
              </Link>
              {/* <div className="w-full border-t-2 border-primary/50"></div> */}
              <Link
                href="/#services"
                className="w-full flex items-center justify-start h-20 hover:bg-primary-nav hover:justify-center"
              >
                <p className="w-5/6 text-center text-white">Expertise</p>
              </Link>
              {/* <div className="w-full border-t-2 border-primary/50"></div> */}
              <Link
                href="/#projects"
                className="w-full flex items-center justify-start h-20 hover:bg-primary-nav hover:justify-center"
              >
                <p className="w-3/5 text-center text-white">Project</p>
              </Link>
              <Link
                href="/#contact"
                className="w-full flex items-center justify-start h-20 hover:bg-primary-nav hover:justify-center"
              >
                <p className="w-5/6 text-center text-white">Contact</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
