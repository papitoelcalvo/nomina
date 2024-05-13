import React, { useState } from 'react'
import './barra.css'
import perf from '../../assets/perf.jpg'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaIdCardClip, FaBuilding, FaUserClock } from "react-icons/fa6";


function Barra() {

  const [isEMOpen, setIsEMOpen] = useState(false);
  const [isEPOpen, setIsEPOpen] = useState(false);

  const toggleEMMenu = () => {
    setIsEMOpen(!isEMOpen);
  };

  const toggleEPMenu = () => {
    setIsEPOpen(!isEPOpen);
  };

  return (
    <div className='bod'>
      <div className='barr'>
        <div className='up'>
          <img src={perf} className='per'/>
          <h2>JULIO PEÑA</h2>
        </div>
        <div className='abajp'>
        <button className='btnm' onClick={toggleEPMenu}>PANEL DE CONTROL</button>
          { isEPOpen&& (
            <ul>
              <li><FaIdCardClip/><Link className='lin' to={'/system'}>DASHBOARD</Link></li>
            </ul>
          )}

          <button className='btnm' onClick={toggleEMMenu}>ADMINISTRACION</button>
          { isEMOpen&& (
            <ul>
              <li><FaIdCardClip/><Link className='lin' to={'/cargos'}>CARGOS</Link></li>
              <li><RiCalendarScheduleFill/><Link className='lin' to={'/horarios'}>HORARIOS</Link></li>
              <li><FaUser/><Link className='lin' to={'/usuario'}>EMPLEADOS</Link></li>
              <li><FaUserClock/><Link className='lin' to={'/asistencia'}>ASISTENCIA</Link></li>
              <li><FaBuilding/><Link className='lin' to={'/empresa'}>EMPRESA</Link></li>

            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Barra;