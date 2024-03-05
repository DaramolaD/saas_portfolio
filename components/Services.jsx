import React from "react";
import SectionHeader from "./SectionHeader";
import ContainerStroke from "./ContainerStroke";
import AccordionContainer from "./Accordion";
import { Button } from "./ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";

const Services = () => {
  return (
    <div className="bg-bg2-100 w-full h-fit flex justify-center py-28">
      <div className="relative max-w-screen-2xl gap-12 w-full flex items-start flex-col px-5">
        <SectionHeader>Custom Startup Solutions</SectionHeader>
        <AccordionContainer />
        <div className="flex gap-5">
          <Button variant="default" size="lg" className="md:ml-10">
            <span className="text-lg">Schedule A Call</span>
            <CalendarIcon className="ml5" />
          </Button>
          <Button variant="outline" size="lg">
            <span className="text-lg">Email</span>
          </Button>
        </div>
        <ContainerStroke>S</ContainerStroke>
      </div>
    </div>
  );
};

export default Services;
