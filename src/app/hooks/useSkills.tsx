"use client"

import React, { useEffect } from 'react'
import { skills } from '../data/SkillsData';
import { certificados } from '../data/CertificadosData';

export type SkillData = {
    nome: string,
    img: string,
    texto: string,
    id: number
}

function useSkills() {

    const [current, setCurrent] = React.useState(1);

    const [data, setData] = React.useState<SkillData>();

    const [skillsComCertificado, setSkillsComCertificado] = React.useState<SkillData[]>();





    useEffect(()=>{

        skills.map((item)=>{
            if (item.id === current) {
                setData(item)
                
            }
        })

        const hasCertificado = skills
        .map((item) => {
            if (certificados.filter(certificado => certificado.categoria.includes(item.nome)).length > 0) {
            return item;
            }
            return undefined;
        })
        .filter((item): item is SkillData => item !== undefined);
        setSkillsComCertificado(hasCertificado)





    },[current])




  return {
    current,
    setCurrent,
    data,
    skillsComCertificado,

  }
}

export default useSkills
