"use client"

import React from 'react'
import Text from '../ui/Text'
import Button from '../ui/Button'
import ProjectCard from './ProjectCard'
import useProjects from '@/app/hooks/useProjects'

function ProjectsSection() {

  const {data,handleIncrease,handleDecrease} = useProjects()

  

  const redirect = () => {
    window.open(data!.live, '_blank')
  }

  if(!data) return null

  return (
    <section id='projetos' className='grid md:grid-cols-2 gap-5  border-b-2 border-main pb-20  '>
      <div className='md:border-r-2 border-main  flex flex-col '>
        <h1 className='text-main text-lg text-center md:text-left '>Projetos:</h1>

        <ProjectCard decrease={handleDecrease} increase={handleIncrease} data={data}/>

      </div>
      <div className='flex flex-col justify-between gap-5 '>
        <Text texto={data.text} title={data.title}/>
        <div className='flex justify-center md:justify-start'>
          <Button text="Ver Projeto" action={redirect} src="/icons/right-arrow.svg" alt="github" />
        </div>
      </div>



   </section>
  )

}

export default ProjectsSection
