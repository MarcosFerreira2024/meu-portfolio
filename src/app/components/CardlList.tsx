import React from 'react'
import Card from './Card'

export type Card = {
    number:number,
    text:string
}



function CardlList({data}:{data:Card[]}) {

  return (
    <>
        {data.map((item,i)=>{
            return <Card key={i} number={item.number} text={item.text}/>
        })}

    </>
  )
}

export default CardlList
