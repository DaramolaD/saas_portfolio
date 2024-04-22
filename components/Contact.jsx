"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import { Button } from "./ui/button";
import ContainerStroke from "./ContainerStroke";
import { useForm } from "@formspree/react";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [state, handleSubmit] = useForm("moqoeobq");
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const setMsg = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };
  const errorMsg = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  };
  useEffect(() => {
    if (state.succeeded) {
      return setMsg();
    } else {
      return errorMsg();
    }
  }, [state.succeeded]);
  const handleSubmit45 = (e) => {
    e.preventDefault();
    console.log(formData);
    // Send formData to server or perform other actions
  };
  return (
    <div
      className="bg-bg1-normal w-full h-fit flex justify-center py-28"
      id="contact"
    >
      <div className="relative max-w-screen-2xl gap-12 w-full flex items-start flex-col px-5">
        <SectionHeader>Contact</SectionHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid pl-0 md:pl-10 gap-10 max-w-[700px] w-full">
            <div className="flex w-full flex-wrap gap-5">
              <div className="flex flex-1 flex-col w-full item-start gap-5">
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
                  required
                  name="name"
                  onChange={handleChange}
                  className="p-4 rounded-md bg-bg2-400 w-full text-white placeholder-white"
                />
              </div>
              <div className="flex flex-1 flex-col w-full item-start gap-5">
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
                  required
                  name="email"
                  onChange={handleChange}
                  className="p-4 rounded-md bg-bg2-400 w-full text-white placeholder-white"
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
                required
                name="message"
                onChange={handleChange}
                className="p-4 rounded-md min-h-40 h-full bg-bg2-400 text-white placeholder-white"
              />
            </div>
            <div className="flex gap-5 items-center justify-between">
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-fit max-w-[150px]"
              >
                Submit
              </Button>
              {alert ? (
                <div className="flex items-center rounded-[50px] gap-2 py-[5px] px-3 bg-primary/100 p-1">
                  <CheckCircledIcon className="w-5 h-5 text-bg2-100" />
                  <p className="text-sm leading-normal text-bg2-100">
                    Message Sent
                  </p>
                </div>
              ) : error ? (
                <div className="flex items-center rounded-[50px] gap-2 py-[5px] px-3 bg-red-500 p-1">
                  <CrossCircledIcon className="w-5 h-5 text-bg2-100" />
                  <p className="text-sm leading-normal text-bg2-100">
                    Something went wrong. Try again
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </form>
        <ContainerStroke>C</ContainerStroke>
      </div>
    </div>
  );
};

export default Contact;
