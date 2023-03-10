import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMoon , faSun, faUser } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react'
import './NavBar.scss'
import { Link } from 'react-router-dom'


const NavBar = () => {
    const [theme, setTheme] = useState(false);

    function handleTheme(){
        setTheme(!theme)
    }

  return (
    <div className='containerNavBar'>
        <Link to={"/"}>
        <FontAwesomeIcon icon={faCode}/>
        </Link>
        <div className='containerTheme'>
            <FontAwesomeIcon onClick={handleTheme} icon={theme ? faSun : faMoon}/> 
            <FontAwesomeIcon icon={faUser}  />
        </div>
    </div>
  )
}

export default NavBar