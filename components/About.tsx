import AboutStep from "./AboutStep";

import { aboutSteps } from "@/constants";

const About = () => {
  return (
    <section className="mt-[93px] desktop:mt-[132px] 1024:px-6 desktop:px-[165px] 1024:flex 1024:justify-around desktop:justify-between desktop:max-w-[1440px] desktop:mx-auto">
      <div className="">
        <h2 className="text-two text-center 1024:text-left font-Vietnam text-[30px] 1024:text-[40px] font-extrabold leading-[45px] 1024:leading-[44px] tracking-[-0.619px] 1024:tracking-[-0.714px] px-14 1024:px-0 1024:max-w-[445px] 1024:pr-6">
          What’s different about Manage?
        </h2>
        <p className="text-two text-center 1024:text-left font-Vietnam text-[14px] 1024:text-[16px] font-normal leading-7 1024:leading-[26px] opacity-[0.5025] mt-[13px] 1024:mt-[24px] px-8 1024:px-0 1024:max-w-[350px]">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.{" "}
        </p>
      </div>

      <div className="mt-[54px] 1024:mt-0 flex flex-col gap-[47px] 1024:gap-10 1024:max-w-[542px]">
        {aboutSteps.map((step) => (
          <div key={step.title}>
            <AboutStep {...step} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
