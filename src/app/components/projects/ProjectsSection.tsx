"use client";

import React from "react";
import Text from "../ui/Text";
import Button from "../ui/Button";
import ProjectCard from "./ProjectCard";
import useProjects from "@/app/hooks/useProjects";

import { motion } from "framer-motion";

function ProjectsSection() {
  const { data, handleIncrease, handleDecrease } = useProjects();

  const redirect = () => {
    window.open(data!.live, "_blank");
  };

  if (!data) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      id="projetos"
      className="grid md:grid-cols-2 gap-5  border-b-2 border-main pb-20  "
    >
      <div className="md:border-r-2 border-main  flex flex-col ">
        <h1 className="text-main text-lg text-center md:text-left ">
          Projetos:
        </h1>

        <ProjectCard
          decrease={handleDecrease}
          increase={handleIncrease}
          data={data}
        />
      </div>
      <div className="flex flex-col justify-between gap-5 ">
        <div key={data.text}>
          <Text texto={data.text} title={data.title} />
        </div>
        <div className="flex justify-center md:justify-start">
          <Button
            text="Ver Projeto"
            action={redirect}
            src="/icons/right-arrow.svg"
            alt="github"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
