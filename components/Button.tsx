import { ButtonProps } from "@/common.types";

const Button = ({ text, model, styles, action }: ButtonProps) => {
  return (
    <button
      onClick={action}
      className={`${
        model === 1
          ? "text-[#fcf6f5] font-Vietnam text-[13px] font-bold rounded-[22px] bg-one hover:bg-[#F98F75] btnShadow w-[137px] h-11"
          : model === 2
          ? "text-one font-Vietnam text-[13px] font-bold rounded-[22px] bg-white hover:text-[#f9b09e] btnShadow2 w-[137px] h-11"
          : model === 3
          ? "text-[#fcf6f5] font-Vietnam text-[13px] font-bold rounded-[22px] bg-one hover:bg-[#F98F75] w-20 1024:w-16 h-11"
          : ""
      } ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
