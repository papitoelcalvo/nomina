import React from 'react'
import './dash.css'
import Contad from '../contad';
import { FaArrowRight } from "react-icons/fa6";

function Dash(props) {
  return (
    <div className='cua' style={{backgroundColor: props.fon}} > 
        <div className="pre">
          <div className="let">
            <Contad value={props.value} valueMax={props.valueMax}></Contad>
            <p>{props.info}</p>
          </div>
          <i className='ico-user'> {props.ico}</i>
        </div>
        <div className="mas">
          <p>Mas informacion</p>
          <FaArrowRight className='ico-arrow'/>
        </div>
    </div>
  )
}

export default Dash