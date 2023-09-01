"use client";

import { useState, useEffect } from "react";

import Button from "./Button";
import Testimonial from "./Testimonial";

import { testimonialsInfo } from "@/constants";

const Testimonials = () => {
  const [mobileCarousel, setMobileCarousel] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMobileCarousel((prev) => (prev + 1) % 4);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="mt-[62px] desktop:mt-[146px]">
      <h2 className="text-two text-center font-Vietnam text-[32px] 1024:text-[40px] font-extrabold 1024:font-bold leading-[45px] 1024:leading-[44px] tracking-[-0.66px] 1024:tracking-[-0.714px]">
        What they’ve said
      </h2>

      {/*  */}
      <div className="relative mt-[62px] desktop:mt-[64px] h-[317px] 1024:h-[256px] max-w-[1680px] 1024:mx-auto overflow-hidden">
        {/* DESKTOP */}
        <div className="hidden 1024:flex absolute top-0">
          <div className="flex pt-9 testimonialsSlideDesktop">
            {testimonialsInfo.map((testimonial) => (
              <div key={testimonial.name}>
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>
          <div className="flex pt-9 testimonialsSlideDesktop">
            {testimonialsInfo.map((testimonial) => (
              <div key={testimonial.name}>
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="1024:hidden">
          <div
            className={`testimonial absolute top-0 pt-9 ${
              mobileCarousel === 0
                ? "left-1/2 -translate-x-1/2 opacity-100"
                : "-left-full translate-x-0 opacity-0"
            }`}
          >
            <Testimonial {...testimonialsInfo[0]} />
          </div>
          <div
            className={`testimonial absolute top-0 pt-9 ${
              mobileCarousel < 1
                ? "left-full translate-x-0"
                : mobileCarousel === 1
                ? "left-1/2 -translate-x-1/2"
                : "-left-full translate-x-0"
            }`}
          >
            <Testimonial {...testimonialsInfo[1]} />
          </div>
          <div
            className={`testimonial absolute top-0 pt-9 ${
              mobileCarousel < 2
                ? "left-full translate-x-0"
                : mobileCarousel === 2
                ? "left-1/2 -translate-x-1/2"
                : "-left-full translate-x-0"
            }`}
          >
            <Testimonial {...testimonialsInfo[2]} />
          </div>
          <div
            className={`testimonial absolute top-0 pt-9 ${
              mobileCarousel < 3
                ? "left-full translate-x-0"
                : mobileCarousel === 3
                ? "left-1/2 -translate-x-1/2"
                : "-left-full translate-x-0"
            }`}
          >
            <Testimonial {...testimonialsInfo[3]} />
          </div>

          <div className="absolute bottom-0 w-[43px] h-[7px] left-1/2 -translate-x-1/2 1024:hidden flex justify-between">
            <button
              className={`w-[7px] h-[7px] rounded-[3.5px] border-[1px] border-one ${
                mobileCarousel === 0 ? "bg-one" : "bg-white"
              }`}
              onClick={() => {
                setMobileCarousel(0);
              }}
            />
            <button
              className={`w-[7px] h-[7px] rounded-[3.5px] border-[1px] border-one ${
                mobileCarousel === 1 ? "bg-one" : "bg-white"
              }`}
              onClick={() => {
                setMobileCarousel(1);
              }}
            />
            <button
              className={`w-[7px] h-[7px] rounded-[3.5px] border-[1px] border-one ${
                mobileCarousel === 2 ? "bg-one" : "bg-white"
              }`}
              onClick={() => {
                setMobileCarousel(2);
              }}
            />
            <button
              className={`w-[7px] h-[7px] rounded-[3.5px] border-[1px] border-one ${
                mobileCarousel === 3 ? "bg-one" : "bg-white"
              }`}
              onClick={() => {
                setMobileCarousel(3);
              }}
            />
          </div>
        </div>
      </div>

      {/*  */}

      <Button
        text="Get Started"
        model={1}
        styles="block mt-[47px] desktop:mt-[48px] mx-auto"
      />
    </section>
  );
};

export default Testimonials;
