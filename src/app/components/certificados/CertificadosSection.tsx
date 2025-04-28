"use client"
import React from 'react'
import SelectionList from '../SelectionList'
import Certificados from './Certificados'
import useCertificados from '@/app/hooks/useCertificados'
import useSkills from '@/app/hooks/useSkills'

function CertificadosSection() {

    const {data,setCurrent,current,skillsComCertificado} = useSkills()

    const {dataCertificados} = useCertificados(data?data.nome:"CSS")


  return (
    <section id='certificados' className='grid md:grid-cols-2 gap-5 border-b-2 border-main pb-20  mb-5'>
      <div className=' flex flex-col '>
        <h1 className='text-main text-lg text-center md:text-left  '>Certificados:</h1>


        <div className='md:grid md:grid-cols-4 lg:grid-cols-3 flex flex-wrap justify-center max-h-[300px]  gap-5 md:pr-5  sm:max-h-[360px] md:max-h-[260px] lg:max-h-[350px]   xl:max-h-[430px] md:border-r-2 border-main  overflow-y-auto   '>

          

          <SelectionList currentActive={current} action={setCurrent} data={skillsComCertificado?skillsComCertificado:[]}  />


        </div>
      </div>
    <div className='flex md:justify-start justify-center'>
      {
        data?<Certificados current={data.nome} data={dataCertificados}/>:<></>
      }
    </div>


  </section>
  )
}

export default CertificadosSection