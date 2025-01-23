import React from 'react'
import './FolderForm.css'; // Import file CSS

const ContactCard = () => {
  return (
    <div className="folder-container">
    <form className="folder-form">
      <input type="text" placeholder="Your name" className="input-field" />
      <input type="email" placeholder="Your Email" className="input-field" />
      <textarea placeholder="Message" className="input-field textarea"></textarea>
      <button type="submit" className="submit-button">send message</button>
    </form>
  </div>
  )
}

export default ContactCard