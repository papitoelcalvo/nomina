import React, { useState } from 'react';
import '../css/login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import axios from "axios"
function login() {

  const [usuario, setUser] = useState('')
  const [pasword, setPassword] = useState('')

  function handleSubmit(event){
    event.preventDefaul();
    axios.post('http://localhost:3001/login', { usuario, pasword })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className='fon'>
      <form onSubmit={handleSubmit} className='cuadro'>
                <h1>Login</h1>
            <div className="usuar">
                <input type="text" placeholder="Usuario" 
                onChange={e => setUser(e.target.value)}
                />
                <FaUser className='fa-user'/>
            </div>
            <div className="contra">
                <input type="password" placeholder="Contraseña" required />
                <FaLock className='fa-lock' />
            </div>
            <div className="remen">
            <input type="checkbox" name="" id="" 
            onChange={e => setPassword(e.target.value)}
            />
            <p>Recordar</p>
            </div>
            <button type='submit'>Acceder</button>
      </form>
    </div>
  )
}

export default login




