import { StaticImageData } from "next/image";

export interface HeaderProps {
  isModalOpen: boolean;
  setIsModalOpen: (modalOpened: boolean) => void;
}

export interface ButtonProps {
  text: string;
  model?: number;
  styles?: string;
  action?: () => void;
}
export interface aboutStepProps {
  number: string;
  title: string;
  text: string;
}

export interface testimonialProps {
  image: StaticImageData;
  name: string;
  text: string;
}
