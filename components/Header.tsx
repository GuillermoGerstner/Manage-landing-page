import Image from "next/image";
import Link from "next/link";

import Button from "./Button";

import { headerNavbarLinks } from "@/constants";

import { HeaderProps } from "@/common.types";

import logo from "@/public/logo.svg";
import menu from "@/public/icon-hamburger.svg";
import close from "@/public/icon-close.svg";

const Header = ({ isModalOpen, setIsModalOpen }: HeaderProps) => {
  return (
    <header className="px-6 desktop:px-[165px] mt-[41px] tablet:mt-14 flex justify-between items-start max-w-[1440px] mx-auto">
      <Image
        src={logo}
        alt="logo"
        className="w-auto h-[18px] tablet:h-6 mt-1 tablet:mt-[17px]"
      />

      <nav className="hidden tablet:flex gap-4 1024:gap-8 mt-[13px]">
        {headerNavbarLinks.map((link) => (
          <Link
            href={link.href}
            key={link.text}
            className="text-two font-Vietnam text-[13px] font-medium hover:opacity-50"
          >
            {link.text}
          </Link>
        ))}
      </nav>

      <Button text="Get Started" model={1} styles="hidden tablet:block" />

      <Image
        src={menu}
        alt="menu"
        className={`w-[25px] h-auto tablet:hidden cursor-pointer ${
          isModalOpen ? "hidden" : ""
        }`}
        onClick={() => setIsModalOpen(true)}
      />

      <div
        className={`modalBg w-full h-screen absolute top-[-41px] left-0 z-10 pt-[103px] ${
          isModalOpen ? "" : "hidden"
        }`}
      >
        <Image
          src={close}
          alt="close"
          className={`w-[21px] h-auto absolute top-[39px] right-[26px] cursor-pointer ${
            isModalOpen ? "" : "hidden"
          }`}
          onClick={() => setIsModalOpen(false)}
        />

        <nav className="modalNav mx-6 py-10 flex flex-col items-center gap-6">
          {headerNavbarLinks.map((link) => (
            <Link
              href={link.href}
              key={link.text}
              className="text-two font-Vietnam text-[16px] font-bold hover:opacity-50 tracking-[-0.286px]"
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
