import React from "react";
import { Logo } from "./Icons";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full fixed top-0 bg-bg1-normal z-50 flex justify-center">
      <div className="flex items-center justify-between max-w-screen-2xl w-full py-5 px-12">
        <Logo className="w-10 h-10" />
        <div className="hidden md:flex items-center justify-between">
          <Button variant="link" className="text-sm md:text-base lg:text-lg">
            <Link href="/">Home</Link>
          </Button>
          <Button variant="link" className="text-sm md:text-base lg:text-lg">
            <Link href="/#about">About</Link>
          </Button>
          <Button variant="link" className="text-sm md:text-base lg:text-lg">
            <Link href="/#expertise">Expertise</Link>
          </Button>
          <Button variant="link" className="text-sm md:text-base lg:text-lg">
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

        <HamburgerMenuIcon className="w-6 h-6 sm:w-8 sm:h-8 md:hidden text-white" />
      </div>
    </div>
  );
};

export default Header;
