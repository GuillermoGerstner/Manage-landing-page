import Image from "next/image";

import Button from "./Button";

import illustrationIntro from "@/public/illustration-intro.svg";

const Hero = () => {
  return (
    <section className="relative mt-12 desktop:mt-[120px] 1024:flex 1024:flex-row-reverse 1024:justify-around desktop:justify-between 1024:px-6 desktop:px-[165px] desktop:max-w-[1440px] desktop:mx-auto">
      <Image
        src={illustrationIntro}
        alt="illustration"
        className="w-[90%] max-w-[540px] h-auto mx-auto 1024:mx-0"
        priority
      />

      <div className="mt-[19px] 1024:mt-[49px]">
        <h1 className="text-two text-center 1024:text-left font-Vietnam text-[40px] 1024:text-[56px] font-bold leading-[50px] 1024:leading-[64px] tracking-[-1px] px-6 1024:px-0 1024:max-w-[465px]">
          Bring everyone together to build better products.
        </h1>
        <p className="text-two text-center 1024:text-left font-Vietnam text-[16px] font-normal leading-7 1024:leading-[26px] opacity-[0.5025] mt-[9px] 1024:mt-4 1024:max-w-[350px] px-6 1024:px-0">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button
          text="Get Started"
          model={1}
          styles="mt-[29px] 1024:mt-10 mx-auto 1024:mx-0 block"
        />
      </div>
    </section>
  );
};

export default Hero;
