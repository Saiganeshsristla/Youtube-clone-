import React from 'react'

const Buttons = ({name}) => {
  return (
    <div>
        <button className="p-1 m-2 px-5 bg-gray-200 rounded-lg hover:bg-gray-300 focus:bg-black focus:text-white">{name}</button>
    </div>
  )
}

export default Buttons