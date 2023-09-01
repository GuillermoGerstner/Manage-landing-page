import { aboutStepProps } from "@/common.types";

const AboutStep = ({ number, title, text }: aboutStepProps) => {
  return (
    <article className="pl-[16px] 1024:pl-0">
      <div className="flex items-center gap-[15px] 1024:gap-7 bg-[#FFF0EC] 1024:bg-transparent rounded-s-[39px]">
        <span className="block rounded-[39px] bg-one w-[67px] h-[39px] text-white text-center font-Vietnam text-[16px] font-bold tracking-[-0.286px] pt-[6px]">
          {number}
        </span>
        <h3 className="text-two font-Vietnam text-[16px] font-bold tracking-[-0.286px]">
          {title}
        </h3>
      </div>
      <p className="text-two font-Vietnam text-[14px] 1024:text-[16px] font-normal leading-7 1024:leading-[26px] opacity-[0.5025] mt-2 1024:mt-[9px] pr-5 1024:pr-0 1024:pl-[95px]">
        {text}
      </p>
    </article>
  );
};

export default AboutStep;
