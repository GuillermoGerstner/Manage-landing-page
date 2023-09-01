"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "./Button";

import { footerNavbarLinks, socialMediaLinks } from "@/constants";

import logo from "@/public/logo-footer.svg";

const Footer = () => {
  const [emailError, setEmailError] = useState<boolean>(false);

  function emailCheck() {
    var input = (document.getElementById("emailBox") as HTMLInputElement).value;
    var expr = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!expr.test(input)) {
      /* ERROR */
      setEmailError(true);
    } else {
      /* ACCEPTED */
      setEmailError(false);
      location.reload();
    }
  }

  return (
    <footer className="bg-three px-6 tablet:px-12 desktop:px-[165px] pt-[51px] pb-[30px] desktop:py-[62px]">
      <div className="max-w-[1110px] mx-auto flex flex-col gap-[52px] 1024:h-[127px] relative">
        <div className="flex justify-around gap-2 1024:max-w-[272px] 1024:absolute top-[3px] right-0">
          <input
            id="emailBox"
            type="email"
            className={`outline-none rounded-[22px] h-11 pl-6 1024:pl-4 font-Vietnam text-[13px] font-normal tracking-[-0.1px] w-[73%] 1024:max-w-[200px] ${
              emailError
                ? "text-[#F33C3C] border-[#F33C3C] border-[1px]"
                : "text-[#8D8D8D]"
            }`}
            placeholder="Updates in your inbox…"
          />
          <Button text="Go" model={3} styles="" action={emailCheck} />
          <span
            className={`text-[#F33C3C] font-Vietnam text-[10px] italic font-normal tracking-[-0.077px] absolute top-[48px] left-4 ${
              emailError ? "" : "hidden"
            }`}
          >
            Please insert a valid email
          </span>
        </div>

        <nav className="flex justify-around 1024:absolute left-[279px] 1024:gap-28 desktop:gap-[222px]">
          <div className="flex flex-col gap-[13px]">
            {footerNavbarLinks
              .map((link) => (
                <Link
                  href={link.href}
                  key={link.text}
                  className="text-white hover:text-one font-Vietnam text-[15px] font-normal tracking-[-0.234px]"
                >
                  {link.text}
                </Link>
              ))
              .slice(0, 4)}
          </div>
          <div className="flex flex-col gap-[13px]">
            {footerNavbarLinks
              .map((link) => (
                <Link
                  href={link.href}
                  key={link.text}
                  className="text-white hover:text-one font-Vietnam text-[15px] font-normal tracking-[-0.234px]"
                >
                  {link.text}
                </Link>
              ))
              .slice(4)}
          </div>
        </nav>

        <div className="flex items-center justify-around 1024:justify-between 1024:w-[154px] 1024:absolute bottom-0 left-0">
          {socialMediaLinks.map((link) => (
            <Image
              src={link.image}
              alt={link.name}
              key={link.name}
              className="w-8 1024:w-5 toWhite hover:filter-none"
            />
          ))}
        </div>

        <Image
          src={logo}
          alt="logo"
          className="mx-auto w-[158px] 1024:w-[147px] h-auto 1024:absolute top-0 left-0"
        />

        <span className="text-white w-fit mx-auto font-Vietnam text-[13px] font-normal tracking-[-0.203px] opacity-[0.5025] 1024:absolute bottom-0 right-0">
          Copyright 2020. All Rights Reserved
        </span>
      </div>
      <p className="absolute bottom-0 left-0 text-center w-full font-Vietnam text-[12px] text-one">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.linkedin.com/in/guillermogerstner">
          Guillermo Gerstner
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
