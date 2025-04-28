import React from 'react'
import ContactInfo, { ContactInfoProps } from './ContactInfo'







function ContactInfoList({data}:{data:ContactInfoProps[]}) {
  return (
    <nav className='flex flex-col gap-2'>
      {
        data.map((item,i)=>{
            return <ContactInfo key={i} href={item.href} src={item.src} alt={item.alt} text={item.text} />
        })
      }
    </nav>
  )
}

export default ContactInfoList
