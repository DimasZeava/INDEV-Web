import React from 'react'
import Field from './Field'

const ContactCard = () => {
  return (
    <div className='w-full h-full flex flex-col'>
      <div className="flex justify-center mb-4">
        <div className="text-white text-lg">Message Us</div>
      </div>
      <form className="w-full h-full px-10 py-2 bg-white/10 backdrop-blur-md gap-3 flex flex-col justify-center items-center rounded-r-3xl rounded-b-3xl flex-grow">
        <Field placeholder={"Your Name"} />
        <Field placeholder={"Your Email"} />
        <Field placeholder={"Message"} />
        <button
          type="submit"
          className="self-start bg-orange-500 hover:bg-orange-600 text-white py-2 px-5 rounded transition"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactCard