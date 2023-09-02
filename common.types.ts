import { StaticImageData } from "next/image";

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
