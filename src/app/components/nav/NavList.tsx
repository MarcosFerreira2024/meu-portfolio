import React from "react";
import NavButton from "./NavButton";
import { motion, Variants } from "framer-motion";

type ButtonProps = {
  ref: string;
  children: React.ReactNode;
};

function NavList({ data }: { data: ButtonProps[] }) {
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-5"
    >
      {data.map((data) => (
        <motion.div key={data.ref} variants={itemVariants}>
          <NavButton ref={data.ref}>{data.children}</NavButton>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default NavList;
