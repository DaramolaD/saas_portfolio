import React from "react";
import SectionHeader from "./SectionHeader";
import ContainerStroke from "./ContainerStroke";
import AccordionContainer from "./Accordion";
import { Button } from "./ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Services = () => {
  return (
    <div
      className="bg-bg2-100 w-full h-fit flex justify-center py-28"
      id="services"
    >
      <div className="relative max-w-screen-2xl gap-12 w-full flex items-start flex-col px-5">
        <SectionHeader>Custom Startup Solutions</SectionHeader>
        <AccordionContainer />
        <div className="flex gap-7 flex-wrap gap-y-6">
          <Button
            variant="default"
            size="lg"
            className="py-3 md:py-2 px-6 md:px-8"
          >
            <span className="text-base sm:text-lg lg:text-xl">
              Let&apos;s Discuss Your Project.
            </span>
            <CalendarIcon className="ml5" />
          </Button>
          <Button variant="outline" size="lg">
            <Link href="/#contact">
              <span className="text-lg">Email</span>
            </Link>
          </Button>
        </div>
        <ContainerStroke>S</ContainerStroke>
      </div>
    </div>
  );
};

export default Services;
