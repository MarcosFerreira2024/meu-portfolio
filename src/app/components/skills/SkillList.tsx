import { ProjectData } from '@/app/hooks/useProjects'
import Image from 'next/image'
import React from 'react'

function SkillList({data}:{data:ProjectData}) {
  return (
    <div className='flex gap-5  invert-100 brightness-0'>
        {
            data.tecnologias.map((item,i)=>{
                return <Image width={20} height={20} src={"skills/"+item.replace(".","").toLowerCase()+".svg"} key={i} alt={item} title={item} className='max-w-[20px] hover:opacity-80  duration-300 ease-in-out' />
            })
        }
      
    </div>
  )
}

export default SkillList
