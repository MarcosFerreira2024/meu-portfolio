"use client"
import React, { useEffect } from 'react'

function Loader({children}:{children:React.ReactNode}) {

  const [loading, setLoading] = React.useState(true)


  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    },300)
  })



  if(loading){
    return (
      <div className='w-screen h-screen flex gap-2 justify-center items-center bg-slate-100 z-100 fixed left-0 top-0 right-0 bottom-0 overflow-hidden'>

        <h1 className='text-mid2 text-main'>Carregando</h1>

        <div className='w-[16px] h-[16px] bg-green-600 border-2 border-green-800 border-t-transparent duration-300 animate-spin rounded-full'></div>
        <div className='w-[16px] h-[16px] bg-green-600 border-2 border-green-800 border-t-transparent duration-300 animate-spin rounded-full'></div>
        <div className='w-[16px] h-[16px] bg-green-600 border-2 border-green-800 border-l-transparent duration-300 animate-spin rounded-full'></div>

        

      </div>
    )
  }else{
    return <>{children}</>
  }
}

export default Loader
