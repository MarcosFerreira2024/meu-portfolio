"use client";
import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.1 }}
      id="contato"
      className="flex flex-col  border-b-2 border-main pb-20 mb-5 "
    >
      <h1 className="text-lg text-main ">Contato:</h1>

      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="flex self-center"
      >
        <ContactForm />
      </motion.div>
    </motion.section>
  );
}

export default ContactSection;
