import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MiComponente = ({ idempleado }) => {
    const [empleado, setEmpleado] = useState()
    useEffect(() => {
        axios.get('http://localhost:3001/usuarios/' + 101)
          .then(res => {
            if (res.data.body) {
              setEmpleado(res.data.body);
            } else {
              console.error('La respuesta de la API no contiene datos');
            }
          })
          .catch(err => console.log(err));
      }, [idempleado]);

      if (!empleado) {
        return <div>Cargando...</div>;
      }
      
      // Ahora puedes acceder a empleado.idempleado de manera segura
      console.log(empleado.idempleado);
      
        return (
          <div>
            <h1>Empleado</h1>
            <p>{empleado.idempleado}</p>
            <p>{empleado.nombre_empleado}</p>
          </div>
        )
}

export default MiComponente;
