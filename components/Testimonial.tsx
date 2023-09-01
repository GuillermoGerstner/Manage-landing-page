import Image from "next/image";

import { testimonialProps } from "@/common.types";

const Testimonial = ({ image, name, text }: testimonialProps) => {
  return (
    <article className="relative h-[248px] 1024:h-[220px] w-[340px] 1024:w-[540px] bg-[#fafafa] pt-[60px] px-[21px] 1024:px-10 pb-[42px] 1024:pb-10 1024:mx-[15px]">
      <Image
        src={image}
        alt="user"
        className="w-[72px] h-auto absolute top-[-36px] left-1/2 -translate-x-1/2"
      />
      <h3 className="text-two text-center font-Vietnam text-[16px] font-bold tracking-[-0.286px]">
        {name}
      </h3>
      <p className="text-two text-center font-Vietnam text-[14px] 1024:text-[16px] font-normal leading-[26px] opacity-[0.5025] mt-[19px]">
        {text}
      </p>
    </article>
  );
};

export default Testimonial;
