import React from "react";
import SectionHeader from "./SectionHeader";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <div className="bg-bg1-normal w-full h-fit flex justify-center py-28">
      <div className="relative max-w-screen-2xl gap-12 w-full flex items-start flex-col px-5">
        <SectionHeader>Contact</SectionHeader>
        <div className="grid md:pl-10 gap-10 max-w-[700px] w-full">
          <div className="flex w-full flex-wrap gap-5">
            <div className="flex flex-1 flex-col w-full max-w-sm item-start gap-5">
              <label
                htmlFor="name"
                className="text-lg leading-normal text-white"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="p-4 rounded-md"
              />
            </div>
            <div className="flex flex-1 flex-col w-full max-w-sm item-start gap-5">
              <label
                htmlFor="email"
                className="text-lg leading-normal text-white"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="p-4 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-auto flex-col w-full item-start gap-5">
            <label
              htmlFor="meassage"
              className="text-lg leading-normal text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              type="textarea"
              placeholder="Message"
              className="p-4 rounded-md min-h-40 h-full"
            />
          </div>
          <Button variant="default" size="lg" className="w-fit max-w-[150px]">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
