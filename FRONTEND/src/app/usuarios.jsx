import React, { useEffect, useState } from 'react'
import '../css/empleados.css'
import Barra from '../components/later/Barra'
import Nav from '../components/nav/Nav'
import { FaPencil } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { RxReader } from "react-icons/rx";
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';


const Usiario = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/empleados')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [])

  const [values, setValues] = useState({
    id: {},
    nombre: '',
    apellido: '',
    departamento: {},
    puesto: {},
    empresa: {},
    sueldo: {}
  })

   const {idempleado} = useParams();
   useEffect(()=>{
    axios.get('http://localhost:3001/usuarios/'+idempleado)
    .then(res => console.log(res))
    .catch(err => console.log(err))
   }, [])

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
    width: '80%',
    height: '80vh'
  };

  const handleSunmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/usuarios', values)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  const [crea, setCrea] = useState(false);

   const creaClose = () => setCrea(false);
   const crealeShow = () => setCrea(true);

  const [muestra, setMues] = useState(false);
  const muestraShow = (idempleado) => {
    axios.get(`http://localhost:3001/usuarios/${idempleado}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  
    setMues(true);
  };
  const muestraClose = () => setMues(false);

  const [edita, setEdit] = useState(false);
  const editaShow = (idempleado) => {
    axios.get(`http://localhost:3001/usuarios/${idempleado}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  
    setEdit(true);
  };
  const editaClose = () => setEdit(false);

  const [elimina, setEli] = useState(false);
  const eliminaShow = (idempleado) => {
    axios.get(`http://localhost:3001/usuarios/${idempleado}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  
    setEli(true);
  };
  const eliminaClose = () => setEli(false);


  return (
    <div className='bodys'>
      <Barra/>
      <div className="pan">
        <Nav/>
        <div className="sobrae">
          <div className="btncreaem">
            <button className='crear_emplead' onClick={crealeShow}>Nuevo Empleado</button>
          </div>
        <Modal show={crea} onHide={creaClose} centered style={modalStyle}>
          <Modal.Header closeButton>
            <Modal.Title>Nuevo Empleado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="cra_emp" onSubmit={handleSunmit} >
            <div className="form_emp">
                <label>id</label>
                <input type="text" onChange={e => setValues({...values, id: e.target.value})}/>
              </div>

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
                <label>Empresa</label>
                <select onChange={e => setValues({...values, empresa: e.target.value})}>
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
                <button type='Submit' onClick={creaClose}>crear</button>
                <button onClick={creaClose}>cerrar</button>
              </div>
            </form>
          </Modal.Body>
        </Modal>

        <Modal show={muestra} onHide={muestraClose} centered style={modalStyle}>
          <Modal.Header closeButton>
            <Modal.Title>Datos del empleado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <button onClick={muestraClose}>cerrar</button>
          </Modal.Body>
        </Modal>

        <Modal show={edita} onHide={editaClose} centered style={modalStyle}>
          <Modal.Header closeButton>
            <Modal.Title>Editar empleado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <button onClick={editaClose}>cerrar</button>
          </Modal.Body>
        </Modal>
        <table className='tabl_emp'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th>DEPARTAMENTO</th>
                <th>PUESTO</th>
                <th>EMPRESA</th>
                <th>SUELDO</th>
                <th>OPCIONES</th>
              </tr>
            </thead>
            <tbody>
              {data.map((empleado, index) =>{
                return(
                  <tr key={index}>
                    <td>{empleado.idempleado}</td>
                    <td>{empleado.nombre_empleado}</td>
                    <td>{empleado.apellido}</td>
                    <td>{empleado.nombre_depar}</td>
                    <td>{empleado.nombre_pues}</td>
                    <td>{empleado.nombre}</td>
                    <td>{empleado.sueldo}</td>
                    <td>
                      <RxReader className='icono' onClick={() => muestraShow(empleado.idempleado)}/>
                      <FaPencil className='icono' onClick={() => editaShow(empleado.idempleado)}/>
                      <IoClose className='iconox'onClick={() => eliminaShow(empleado.idempleado)}/>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Usiario


