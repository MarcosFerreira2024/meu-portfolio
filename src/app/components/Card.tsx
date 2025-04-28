import useRandom from "../hooks/useRandom"

function Card({text,number}:{text:string,number:number}) {

    const {num} = useRandom({number})
   


  return (
    <div className='flex flex-row hover:scale-105 duration-300 hover:bg-main text-textos ease-in hover:text-secundary-text justify-between sm:max-w-[180px] max-w-[180px] min-w-[180px]  sm:min-w-[180px] mainShadow items-center border-2 border-main px-2.5 py-2'>
      <p className='text-mid2  '>{text}:</p>
      <p className='text-mid '>{num}</p>
      
    </div>
  )
}

export default Card
