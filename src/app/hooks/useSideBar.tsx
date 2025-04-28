"use client"

import React from 'react'

function useSideBar() {

    const [isOpen,setIsOpen] = React.useState(false)


  return {
    isOpen,
    setIsOpen
  }
}

export default useSideBar
