import React from 'react'
import Barra from '../components/later/Barra';
import Nav from '../components/nav/Nav';
import '../css/cargos.css'

const Cargos = () => {
  return (
    <div className='bodys'>
    <Barra/>
    <div className="pan">
      <Nav/>
      <div className="sobrae">
      <div class="dropdown">
  <button>HubSpot Resources</button>
  <div class="dropdown-content">
  <a href="https://blog.hubspot.com/">Blog</a>
  <a href="https://academy.hubspot.com/">Academy</a>
  <a href="https://www.youtube.com/user/hubspot">YouTube</a>
  </div>
</div>
      </div>
    </div>
  </div>
  )
}

export default Cargos