"use client"

import React from 'react'
import Text from '../ui/Text'
import SelectionList from '../SelectionList'
import useSkills from '@/app/hooks/useSkills'
import { skills } from '@/app/data/SkillsData'

function SkillSection() {

    const {data,setCurrent,current} = useSkills()


  return (
    <section id='habilidades' className='grid md:grid-cols-2 gap-5 border-b-2 border-main pb-20'>
      <div className='  flex flex-col '>
        <h1 className='text-main text-lg text-center md:text-left  '>Habilidades:</h1>


        <div className='sm:grid sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3 flex flex-wrap justify-center max-h-[250px]  gap-5 md:pr-5  sm:max-h-[360px] md:max-h-[260px] lg:max-h-[350px]   xl:max-h-[430px] md:border-r-2 border-main  overflow-y-auto '>

          

          <SelectionList currentActive={current} action={setCurrent} data={skills}  />


        </div>
      </div>
    <div>
      {
        data?<Text texto={data.texto} title={data.nome}/>:null
      }
    </div>


  </section>
  )
}

export default SkillSection
