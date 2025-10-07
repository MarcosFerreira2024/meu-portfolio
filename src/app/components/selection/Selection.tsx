import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type SelectionProps = {
  src: string;
  alt: string;
  action: React.Dispatch<React.SetStateAction<number>>;
  active: number;
  id: number;
  animationDelay: number;
};

function SelectionButton({
  src,
  alt,
  action,
  active,
  id,
  animationDelay,
}: SelectionProps) {
  return (
    <motion.button
      key={src + id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: animationDelay, ease: "linear", duration: 0.2 }}
      title={alt}
      onClick={() => action(id)}
      className={`${
        active == id
          ? "bg-main border-main-contrast"
          : "cursor-pointer hover:scale-95"
      }  focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-main  xl:min-w-[130px] sm:min-w-[100px]   lg:min-w-[100px] md:min-w-[70px] min-w-[70px] xl:min-h-[130px] sm:min-h-[100px]   lg:min-h-[100px] md:min-h-[70px] min-h-[70px] xl:max-w-[130px] sm:max-w-[100px]   lg:max-w-[100px] md:max-w-[70px] max-w-[70px] xl:max-h-[130px] sm:max-h-[100px]   lg:max-h-[100px] md:max-h-[70px] max-h-[70px] group border-2 mainShadow duration-300 ease-in-out  border-main hover:bg-main justify-center flex items-center`}
    >
      <Image
        width={24}
        height={24}
        src={src}
        alt={alt}
        className={`${
          active == id ? "brightness-0 invert " : ""
        }group-hover:brightness-0 group-hover:invert`}
      />
    </motion.button>
  );
}

export default SelectionButton;
