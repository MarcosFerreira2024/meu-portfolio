import React from "react";
import ContactInfo, { ContactInfoProps } from "./ContactInfo";
import { motion, Variants } from "framer-motion";

function ContactInfoList({ data }: { data: ContactInfoProps[] }) {
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.nav
      className="flex flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {data.map((item, i) => (
        <motion.div key={(item.href, i)} variants={itemVariants}>
          <ContactInfo
            href={item.href}
            src={item.src}
            alt={item.alt}
            text={item.text}
          />
        </motion.div>
      ))}
    </motion.nav>
  );
}

export default ContactInfoList;
