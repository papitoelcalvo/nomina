import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import System from "../app/system";
import Usiario from "../app/usuarios";
import Login from "../app/login";
import  Horarios  from "../app/Horarios";
import Asistencia from "../app/Asistencia";
import Cargos from "../app/Cargos";
import Empresa from "../app/Empresa";

const Path = () => {
  return (
    <Router>
      <Routes>
        <Route path="/system" element={<System/>}/> 
        <Route path="/usuario" element={<Usiario/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/horarios" element={<Horarios/>}/>
        <Route path="/asistencia" element={<Asistencia/>}/>
        <Route path="/cargos" element={<Cargos/>}/>
        <Route path="/empresa" element={<Empresa/>}/>
        <Route
            path="*"
            element={
              <>
                <h1 style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' ,'textAlign': 'center', 'minHeight': '90vh'}}>not found this path </h1>
               
              </>
            }
          ></Route>
      </Routes>
    </Router>
  );
};

export default Path;