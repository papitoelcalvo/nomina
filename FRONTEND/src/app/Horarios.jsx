import React, { useEffect, useState } from 'react'
import '../css/empleados.css'
import Barra from '../components/later/Barra'
import Nav from '../components/nav/Nav'
import { FaPencil } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { RxReader } from "react-icons/rx";
import CrearEmpleado from '../components/crear/CrearEmpleado';


const Horarios = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/empleados')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, []);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'white',
    width: '80%',
    height: '80vh',
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
  const editaClose = () => setEdit(false)

  return (
    <div className='bodys'>
      <Barra/>
      <div className="pan">
        <Nav/>
        <div className="sobrae">
          <div className="btncreaem">
            <button className='crear_emplead' onClick={crealeShow}>Nuevo Empleado</button>
          </div>
        <Modal show={crea} onHide={creaClose} className='modal' backdrop={'static'}>
          <Modal.Header className='modal_header'>
            <Modal.Title>Nuevo Empleado</Modal.Title>
            <IoClose className='CreaCerrar' onClick={creaClose}/>
          </Modal.Header>
          <Modal.Body className='modal_body'>
            <CrearEmpleado/>
          </Modal.Body>
        </Modal>

        <Modal show={muestra} onHide={muestraClose} centered style={modalStyle}>
          <Modal.Header closeButton>
            <Modal.Title>Datos del empleado</Modal.Title>
            <button onClick={muestraClose}>cerrar</button>
          </Modal.Header>
          <Modal.Body>              
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
                    <td className='ID'><p>DF</p>{empleado.idempleado}</td>
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

export default Horarios


