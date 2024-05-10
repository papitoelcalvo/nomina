import React from 'react'
import './nav.css'
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { CgMenuGridR } from "react-icons/cg";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='bodn'>
      < CgMenuGridR className='icon'/>
      <Link to={'/login'}>
      <FaArrowRightFromBracket className='icon'/>
      </Link>
    </div>
  )
}

export default Nav