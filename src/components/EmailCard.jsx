import React from 'react'

const EmailCard = () => {
  return (
    <div className="flex gap-10 items-center p-4 rounded-3xl bg-[#2C2727] w-96">
      <div className="flex justify-center items-center w-8 h-8 p-10 bg-blue-500 text-white rounded-full">
        email
      </div>
      <div className="mt-4 w-full text-start">
        <h2 className="text-xl font-bold text-white">Email</h2>
        <p className="text-gray-700">email@email.com</p>
      </div>
    </div>
  )
}

export default EmailCard