"use client"
import Image from 'next/image'
import React from 'react'

type ButtonProps = {
  text?:string,
  src?:string,
  alt?:string,
  action?:()=>void
  type?:"button"|"submit"|"reset"
}

function Button({text,src,alt,type='button',action}:ButtonProps) {

  if(text &&
    src &&
    alt
  ) return (
    <button type={type} onClick={action}  className='text-textos focus-visible:outline-2 focus-visible:outline-dashed cursor-pointer hover:bg-main hover:text-secundary-text group duration-300 ease-in-out gap-2 flex self-start px-5 py-2 mainShadow items-center  text-mid justify-between  border-main border-2'>
      {text}
      <Image width={20} height={20} className='group-hover:invert-100 group-hover:brightness-0 min-w-[20px]' src={src} alt={alt} />
    
    </button>

  )
  if(
    src &&
    alt)
    return (
   
        <button type={type} onClick={action} title={alt} className='text-textos focus-visible:outline-2 focus-visible:outline-dashed cursor-pointer hover:bg-main hover:text-secundary-text group duration-300 ease-in-out  flex self-start items-center mainShadow  text-mid  border-main border-2'>
          <Image width={20} height={20} className='group-hover:invert-100 group-hover:brightness-0 min-w-[20px]' src={src} alt={alt} />
        </button>
      



    )
    return (
      <button type={type} onClick={action}  className='text-textos w-full justify-center focus-visible:outline-2 focus-visible:outline-dashed cursor-pointer hover:bg-main hover:text-secundary-text group duration-300 ease-in-out gap-2 flex self-start px-5 py-2 mainShadow items-center  text-mid   border-main border-2'>
      {text}
      </button>
    )
  


}

export default Button
