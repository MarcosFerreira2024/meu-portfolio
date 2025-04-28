"use client"
import React from 'react'
import Text from './ui/Text'
import CardlList from './CardlList'
import CardData from '../data/CardData'
import { Resumo } from '../data/Textos'

function ResumoSection() {
  return (
    <section id='resumo' className='grid md:grid-cols-2 md:justify-normal justify-center items-center gap-5 border-b-2 border-main pb-20 '>

        <div className='md:border-r-2 border-main  pr-5'>
        <Text texto={Resumo.text} title={Resumo.title}/>
        </div>
        <div className='flex justify-center  self-start gap-5 md:justify-normal   flex-row flex-wrap '>

        <CardlList data={CardData()} />


        </div>


    </section>
  )
}

export default ResumoSection
