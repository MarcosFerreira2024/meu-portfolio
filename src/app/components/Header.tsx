"use client";

import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

function Header() {
  const handleEasterEgg = () => {
    document.body.classList.toggle("rotate-[-2deg]");
    document.body.classList.toggle("overflow-x-hidden");
    document.body.classList.toggle("overflow-y-hidden");

    if (document.body.classList.contains("rotate-[-2deg]")) {
      setTimeout(() => {
        document.body.classList.remove("rotate-[-2deg]");
      }, 1000);

      setTimeout(() => {
        document.body.classList.remove("overflow-y-hidden");
        document.body.classList.remove("overflow-x-hidden");
      }, 1400);
    }
  };

  return (
    <header className="flex flex-col w-full justify-center items-center text-center pt-5 border-b-2 border-main relative">
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
        className="text-main"
      >
        Desenvolvedor Full-Stack
      </motion.p>
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:text-gg text-4xl text-main-contrast "
      >
        Marcos Vinicius Ferreira Pinto{" "}
      </motion.h1>
      <motion.div
        className="absolute right-2 top-2"
        initial={{ rotate: 0 }}
        animate={{ rotate: [25, 0, 25] }}
        transition={{
          duration: 0.5,
          ease: "linear",
        }}
      >
        <Image
          width={24}
          height={24}
          onClick={handleEasterEgg}
          src="/icons/wave.svg"
          className="duration-300 ease-in-out hover:rotate-12   max-w-[24px] md:max-w-[48px] cursor-not-allowed"
          alt="Não clique em mim"
          title="Não clique em mim"
        />
      </motion.div>
    </header>
  );
}

export default Header;
