import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>
        <form method='post' action="https://getform.io/f/17902f9a-7ff3-4415-a7bf-246987d77ed9" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' name='name' type='text' placeholder='Name'/>
            <input className='bg-[#ccd6f6] my-4 p-2' name='email' type='text' placeholder='Email'/>
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='8' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
                Let's calaborate
            </button>
        </form>
    </div>
  )
}

export default Contact