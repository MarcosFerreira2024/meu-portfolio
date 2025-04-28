import { Certificado } from '@/app/data/CertificadosData'
import Image from 'next/image'
import React from 'react'

function Certificados({current,data}:{current:string,data:Certificado[]}) {
  return (
    <div>
      <h1 className='text-lg text-main pb-1 md:text-left text-center   '>{current}:</h1>

        <div className='flex flex-row gap-5 justify-center md:justify-normal flex-wrap max-w-[600px]'>
            {
                data.map((item,i)=>{
                    return(
                        <a key={i} href={item.link_validacao} target='_blank'>
                            <Image width={240} priority height={240} key={item.link_validacao} src={item.img} alt={item.titulo} className='lg:max-w-[180px] max-h-[120px] max-w-[140px] object-fill hover:opacity-90 hover:scale-105 duration-300 ease-in-out   border-2 border-main mainShadow' />
                        </a >
                    )
                })
            }
        </div>
      
    </div>
  )
}

export default Certificados
