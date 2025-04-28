import React from 'react'
import ContactForm from './ContactForm'

function ContactSection() {
  return (
    <section id='contato' className='flex flex-col  border-b-2 border-main pb-20 mb-5 '>
      <h1 className='text-lg text-main '>Contato:</h1>

      <div className='flex self-center'>
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactSection
