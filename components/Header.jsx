import React from "react";
import { Logo } from "./Icons";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="w-full bg-bg1-normal flex justify-center">
      <div className="flex items-center justify-between max-w-screen-2xl w-full py-5 px-12">
        <Logo />
        <div className="hidden sm:flex items-center justify-between">
          <Button variant="link">Home</Button>
          <Button variant="link">About</Button>
          <Button variant="link">Expertise</Button>
          <Button variant="link">Project</Button>
        </div>

        <Button variant="outline" className="hidden sm:block bg-transparent">
          Contact
        </Button>
      </div>
    </div>
  );
};

export default Header;
