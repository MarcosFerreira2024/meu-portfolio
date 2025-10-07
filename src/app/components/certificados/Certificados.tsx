import { Certificado } from "@/app/data/CertificadosData";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Certificados({
  current,
  data,
}: {
  current: string;
  data: Certificado[];
}) {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div>
      <h1 className="text-lg text-main pb-1 md:text-left text-center   ">
        {current}:
      </h1>

      <motion.div
        className="flex flex-row gap-5 justify-center md:justify-normal flex-wrap max-w-[600px]"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        key={current}
      >
        {data.map((item) => {
          return (
            <motion.a
              transition={{ duration: 0.3, ease: "easeOut" }}
              key={item.link_validacao}
              href={item.link_validacao}
              target="_blank"
              variants={itemVariants}
            >
              <Image
                width={240}
                priority
                height={240}
                key={item.link_validacao}
                src={item.img}
                alt={item.titulo}
                className="lg:max-w-[180px] max-h-[120px] max-w-[140px] object-fill hover:opacity-90 hover:scale-105 duration-300 ease-in-out   border-2 border-main mainShadow"
              />
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Certificados;
