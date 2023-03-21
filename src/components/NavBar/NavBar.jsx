import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMoon , faSun, faUser } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react'
import './NavBar.scss'
import { Link } from 'react-router-dom'
import Buttons from '../buttons/Buttons'
import ButtonContainer from '../buttonContainer/ButtonContainer'


const NavBar = () => {
    const [theme, setTheme] = useState(false);

    function handleTheme(){
        setTheme(!theme)
    }

  return (
    <div className='containerNavBar'>
        <Link to={"/"}>
        <FontAwesomeIcon  className="fa-xl" icon={faCode}/>
        </Link>
        <div className='containerTheme'>
            <FontAwesomeIcon  className="fa-xl" onClick={handleTheme} icon={theme ? faSun : faMoon}/> 
            <FontAwesomeIcon icon={faUser}  className="fa-xl" />
        </div>
    </div>
  )
}

export default NavBar