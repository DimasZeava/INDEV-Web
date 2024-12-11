import React from 'react'
import PropTypes from 'prop-types'

const Field = ({placeholder}) => {
  return (
    <div className="w-full p-4 rounded-lg bg-[#2C2727]">
      <input 
        type="text" 
        className="w-full p-2 rounded-md bg-[#2C2727] text-white border-none outline-none" 
        placeholder={placeholder} 
      />
    </div>
  )
}

Field.propTypes = {
  placeholder: PropTypes.string
}

export default Field