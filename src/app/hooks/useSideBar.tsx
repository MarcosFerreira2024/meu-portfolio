"use client"

import React from 'react'

function useSideBar() {

    const [isOpen,setIsOpen] = React.useState(true)


  return {
    isOpen,
    setIsOpen
  }
}

export default useSideBar
