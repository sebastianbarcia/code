import React from 'react'
import './buttons.scss'

const Buttons = ({click , text }) => {
  return (
    <button className='buttonDefault' onClick={click}>{text}</button>
  )
}

export default Buttons