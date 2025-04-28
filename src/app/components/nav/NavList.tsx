import React from 'react'
import NavButton from './NavButton'

type ButtonProps = {

    ref:string,
    children:React.ReactNode

}

function NavList({data}:{data:ButtonProps[]}) {
  return (
    <>
      {data.map((d,i)=> {
        return <NavButton key={i} ref={d.ref}>{d.children}</NavButton>
      })


      }
      
    </>
  )
}

export default NavList
