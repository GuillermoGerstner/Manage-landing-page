import Image from "next/image";

import Button from "./Button";

import bgSimplifyMobile from "@/public/bg-simplify-section-mobile.svg";
import bgSimplifyDesktop from "@/public/bg-simplify-section-desktop.svg";

const Simplify = () => {
  return (
    <section className="relative mt-[42px] desktop:mt-[180px] bg-one overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto py-[91px] 1024:py-[62px] 1024:flex 1024:justify-between 1024:items-center 1024:px-[165px] z-10">
        <h2 className="text-white text-center 1024:text-left font-Vietnam text-[40px] font-bold leading-[50px] 1024:leading-[44px] tracking-[-1px] 1024:tracking-[-0.714px] px-7 1024:px-0 mx-auto 1024:mx-0 max-w-[455px]">
          Simplify how your team works today.
        </h2>
        <Button
          text="Get Started"
          model={2}
          styles="mt-[29px] 1024:mt-0 mx-auto 1024:mx-0 block"
        />
      </div>

      <Image
        src={bgSimplifyMobile}
        alt="bgMobile"
        className="absolute top-[60px] 1024:hidden"
      />
      <Image
        src={bgSimplifyDesktop}
        alt="bgDesktop"
        className="absolute hidden 1024:flex max-w-[1440px] top-0 left-1/2 -translate-x-1/2"
      />
    </section>
  );
};

export default Simplify;
