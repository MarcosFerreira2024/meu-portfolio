import Image from 'next/image'
import React from 'react'

export type ContactInfoProps = {
    src: string,
    alt: string,
    href?: string,
    text: string
}


function ContactInfo({src,alt,text,href}:ContactInfoProps) {
    if(href == null){
        return (
                <div className='flex flex-row   gap-2 text-small text-secundary-text  '>
                  <Image width={12} height={12} src={src} alt={alt} className='invert-100 brightness-0 w-auto h-auto max-w-[12px]' />
                  <p>{text}</p>
                </div>
        )
    }
    return (
        <a href={href} target='_blank' className='flex  underline underline-secundary flex-row  hover:opacity-90 focus-visible:outline-white gap-2 text-small text-secundary-text  '><Image width={12} height={12} src={src} alt={alt} className='invert-100 brightness-0 w-auto h-auto max-w-[12px]' />{text}</a>
    )
}

export default ContactInfo
