import React from 'react'

function NavButton({children,onclick, ref}:{children: React.ReactNode,onclick?:()=>void, ref?: string}) {
  return (
    <a href={"#"+ref} onClick={onclick??undefined} className='hover:text-main mainShadow focus-visible:outline-secundary focus-visible:outline-2 focus-visible:outline-dashed hover:bg-secundary hover:border-main-contrast text-secundary-text border-2 border-secundary text-mid w-full flex justify-center py-1 lg:py-2 ease-in-out duration-300 '>
      {children}
    </a >
  )
}

export default NavButton
