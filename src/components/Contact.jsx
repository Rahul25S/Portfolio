import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'> {/* Corrected 'justcent' to 'justify-center' */}
          <form action="https://getform.io/f/bgdyzzda" method="POST" className='flex flex-col w-full md:w-1/2'>
            <input type='text'
              name="name"
              placeholder="what's your good name"
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <input type='email' // Changed input type to 'email'
              name="email"
              placeholder='Looking for your email'
              className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <textarea name="message"
              placeholder='Wanna say something...'
              rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
            <button className='text-white bg-blue-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 hover:bg-blue-700 duration-300'>Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
