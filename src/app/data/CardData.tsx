"use client";
import { Card } from "../components/CardlList";
import useStats from "../hooks/useStats";
import { qntdCertificados } from "./CertificadosData";
import { qntdSkills } from "./SkillsData";

function CardData(): Card[] {
  const { repos, commits } = useStats();

  return [
    {
      number: qntdSkills,
      text: "Habilidades",
    },
    {
      number: repos,
      text: "Repositórios",
    },
    {
      number: qntdCertificados,
      text: "Certificados",
    },
    {
      number: commits,
      text: "Commits",
    },
  ];
}

export default CardData;
