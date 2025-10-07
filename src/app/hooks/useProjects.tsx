"use client";

import React, { useEffect } from "react";
import { projetos } from "../data/ProjectsData";

export type ProjectData = {
  id: number;
  img: string;
  title: string;
  text: string;
  tecnologias: string[];
  tec_icons: string[];
  live: string;
};

function useProjects() {
  const [current, setCurrent] = React.useState(1);

  const [data, setData] = React.useState<ProjectData>();

  const handleIncrease = () => {
    if (current === projetos.length) {
      setCurrent(1);
      return;
    }
    setCurrent(current + 1);
  };

  const handleDecrease = () => {
    if (current === 1) {
      setCurrent(projetos.length);
      return;
    }
    setCurrent(current - 1);
  };

  useEffect(() => {
    projetos.map((item) => {
      if (item.id === current) {
        setData(item);
      }
    });
  }, [current]);

  return {
    current,
    setCurrent,
    handleIncrease,
    handleDecrease,
    data,
  };
}

export default useProjects;
