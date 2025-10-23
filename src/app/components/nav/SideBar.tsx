"use client";
import NavList from "./NavList";
import ContactInfoList from "../contact/ContactInfoList";
import NavButton from "./NavButton";
import Image from "next/image";
import { ContactData } from "@/app/data/ContactData";
import { NavData } from "@/app/data/NavData";
import useSideBar from "@/app/hooks/useSideBar";

import { motion } from "framer-motion";

function SideBar() {
  const { setIsOpen, isOpen } = useSideBar();

  return (
    <>
      <Image
        width={24}
        height={24}
        src="icons/menu.svg"
        alt="Abrir menu"
        className={`cursor-pointer w-[24px] fixed lg:top-5 lg:left-5 top-2 left-2 h-[24px] z-100  hover:scale-110 ease-in duration-300 hover:rotate-2   ${
          isOpen ? "invert-100 brightness-0" : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      />

      <nav
        onClick={(e) => e.stopPropagation()}
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full "
        } duration-300 z-10 ease-in-out  flex flex-col p-5 gap-5 fixed  left-0 bg-main h-screen  max-w-[220px] lg:max-w-[240px] mainShadow`}
      >
        <div className="flex justify-center">
          <Image
            width={160}
            height={160}
            src="/geral/profile.png"
            alt="Foto de Marcos Vinicius Ferreira Pinto"
            className="mainShadow rounded-full  hover:rotate-3 ease duration-300 border-2 max-w-[75%]   border-secundary"
          />
        </div>
        <div className="w-full border-[1px] border-secundary  mainShadow"></div>

        <ContactInfoList data={ContactData} />

        <div className="w-full border-[1px] border-secundary  mainShadow"></div>

        <nav className="flex h-full flex-col justify-between">
          <NavList data={NavData} />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: -0 }}
            transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
          >
            <NavButton
              onclick={() =>
                window.open(
                  "geral/Curriculo-Marcos-Vinicius-Ferreira.pdf",
                  "_blank"
                )
              }
            >
              Currículo
            </NavButton>
          </motion.div>
        </nav>
      </nav>
    </>
  );
}

export default SideBar;
