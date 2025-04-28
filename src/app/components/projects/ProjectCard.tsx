"use client"

import React from 'react'
import Button from '../ui/Button'
import SkillList from '../skills/SkillList'
import Image from 'next/image'
import { ProjectData } from '@/app/hooks/useProjects'

type ProjectCardProps= {
    data:ProjectData,
    increase:()=>void,
    decrease:()=>void

}





function ProjectCard({data,decrease,increase}:ProjectCardProps) {
  
  


    return (
    <section className='flex flex-col justify-between gap-5 md:pr-5'>
        <div className='relative w-full'>
            <Image width={1200} height={400} src={data.img} alt={data.title} className='object-cover  md:w-full object-center border-2 border-main mainShadow  ' />
            <div className='absolute bottom-0 left-0 right-0 w-full h-[40px] flex items-center justify-center bg-main-contrast border-2 border-main mainShadow'>
                <SkillList data={data} />

            </div>
        </div>
        <nav className='flex  gap-2 min-w-[60px] justify-center md:justify-end'>
            <Button src="/icons/prev.svg" alt="Voltar" action={decrease} />
            <Button src='/icons/next.svg' alt='Avançar' action={increase}/>
        </nav>
      
    </section>
  )
}

export default ProjectCard
