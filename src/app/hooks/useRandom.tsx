"use client"

import { useEffect, useState } from 'react'

function useRandom({number}:{number:number}) {

    const [num,setNumber] = useState(0)

    useEffect(() => {
     
         const stop = number
         let delay = 0
 
         for (let i = 0; i <= stop; i++) {
             const randomTimer = number<100? Math.floor(Math.random() * 200):Math.floor(Math.random() * 10);
             delay += randomTimer
 
             setTimeout(() => {
                 setNumber(i)
                 if (i == stop){
                     setNumber(number)
                 }
                 
     
             }, delay);
             
         }
    
 
    },[number])
  return {
    num
  }
}

export default useRandom
