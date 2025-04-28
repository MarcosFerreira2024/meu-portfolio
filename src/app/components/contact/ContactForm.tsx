"use client"
import React, { useState } from 'react'
import Button from '../ui/Button'

function ContactForm() {

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const mailtoLink = `mailto:marcosfp2021@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
    }





  return (
    <form  onSubmit={handleSubmit}  className='border-2 border-main p-2 sm:p-5 mainShadow flex self-start'>
        <div className='flex flex-col gap-5 min-w-[280px] sm:min-w-[400px]'>
            <div className='flex flex-col gap-1'>
                <label className='text-main text-mid2' htmlFor="subject">Assunto:</label>
                <input type='text' required name='subject' value={subject} onChange={(e) => setSubject(e.target.value)} className='sm:p-2 p-1 border-2 border-main mainShadow text-mid text-textos focus:outline-none placeholder:text-textos placeholder:opacity-80'   placeholder='Oportunidade de Trabalho' />
            </div>
            <div className='flex flex-col gap-1'>
                <label className='text-main text-mid2' htmlFor="message">Mensagem:</label>
                <textarea name="message" required id="message" value={message} onChange={(e) => setMessage(e.target.value)} className='sm:p-2 p-1 border-2 border-main mainShadow text-mid text-textos focus:outline-none placeholder:text-textos placeholder:opacity-80 max-h-[250px] min-h-[150px]'   placeholder='Digite aqui sua mensagem.'></textarea>

            </div>
            <div>
                <Button type='submit' text="Enviar Mensagem"    />
            </div>
        </div>
    </form>
  )
}

export default ContactForm
