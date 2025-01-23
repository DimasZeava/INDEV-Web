import React from 'react'
import './FolderForm.css'; // Import file CSS

const ContactCard = () => {
  return (
    <div className="folder-container">
      <div className="flex justify-center items-center w-full">
        <div className="top-message-curve-left flex-1 bg-white/10 backdrop-blur-md p-5 rounded-tl-3xl h-full">
        </div>
        <h3 className="font-normal px-5 text-white">
          Message us
        </h3>
    </div>
    <form className="folder-form flex-1 bg-white/10 backdrop-blur-md p-5 rounded-r-3xl rounded-bl-3xl h-full">
      <input type="text" placeholder="Your name" className="input-field" />
      <input type="email" placeholder="Your Email" className="input-field" />
      <textarea placeholder="Message" className="input-field textarea"></textarea>
      <button type="submit" className="submit-button">send message</button>
    </form>
  </div>
  )
}

export default ContactCard