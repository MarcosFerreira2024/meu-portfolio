import React from "react";
import { motion } from "framer-motion";

function Text({ texto, title }: { texto: string; title: string }) {
  return (
    <motion.div className="flex flex-col   text-center md:text-left">
      <motion.h1
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, ease: "linear" }}
        className="text-lg text-main    "
      >
        {title}:
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
        className="text-mid text-textos hyphens-auto  break-words "
      >
        {texto}
      </motion.p>
    </motion.div>
  );
}

export default Text;
