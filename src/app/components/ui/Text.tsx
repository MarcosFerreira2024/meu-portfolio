import React from 'react'

function Text({texto,title}:{texto:string,title:string}) {
  return (
        <div className='flex flex-col  text-center md:text-left'>
            <h1 className="text-lg text-main    ">{title}:</h1>
            <p className='text-mid text-textos hyphens-auto break-words ' >
            {
              texto
            }
            </p>
        </div>
      
  )
}

export default Text
