import React, { useState } from 'react'
import axios from 'axios'
import './CreaEmpleado.css'

const CrearEmpleado = () => {

  const [values, setValues] = useState({
    nombre: '',
    apellido: '',
    departamento: {},
    puesto: {},
    empresa: {},
    sueldo: {},
    periodo: {},
    horario: {}
  })

  const handleSunmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/usuarios', values)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }


  return (
    <div>
    <form className="cra_emp" onSubmit={handleSunmit}>
      <div className="emple_prime">
              <div className="form_emp">
                <label>Nombre</label>
                <input type="text" onChange={e => setValues({...values, nombre: e.target.value})}/>
              </div>
              <div className="form_emp">
                <label>Apellido</label>
                <input type="text" onChange={e => setValues({...values, apellido: e.target.value})}/>
              </div>
              <div className="form_emp">
                <label>Departamento</label>
                <select onChange={e => setValues({...values, departamento: e.target.value})}>
                  <option value="">Seleccionar</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="form_emp">
                <label>Puesto</label>
                <select onChange={e => setValues({...values, puesto: e.target.value})}>
                  <option value="">Seleccionar</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                </select>
              </div>
              <div className="form_emp">
                <label>Periodo de pago</label>
                <select onChange={e => setValues({...values, periodo: e.target.value})}>
                  <option value="">Seleccionar</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                </select>
              </div>
      </div>
      <div className="emple_segun">

              <div className="form_emp">
                <label>Empresa</label>
                <select onChange={e => setValues({...values, empresa: e.target.value})}>
                  <option value="">Seleccionar</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="form_emp">
                <label>Horario</label>
                <select onChange={e => setValues({...values, horario: e.target.value})}>
                  <option value="">Seleccionar</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="form_emp">
                <label>Sueldo</label>
                <input type="text" onChange={e => setValues({...values, sueldo: e.target.value})}/>
              </div>

              <div className="but">
                <button type='Submit'>crear</button>
              </div>
      </div>
    </form>
  </div>
  )
}

export default CrearEmpleado