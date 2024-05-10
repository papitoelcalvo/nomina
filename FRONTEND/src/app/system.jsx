import React from 'react'
import '../css/system.css'
import Barra from '../components/later/Barra'
import Nav from '../components/nav/Nav'
import Dash from '../components/dash/Dash'
import { HiMiniUsers } from "react-icons/hi2";
import { IoWarning } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { BiSolidCircleThreeQuarter } from "react-icons/bi"
import BasicBars from '../components/grafic/Bar'

const system = () => {

  return (
    <div className='bodys'>
      <Barra/>
      <div className="pan">
        <Nav/>
        <div className="sobra">
        <div className="top">
            <Dash value={10} valueMax={100} name="2" ico=<HiMiniUsers/> info="Total de empleados" fon="rgb(80, 80, 80)" />
            <Dash value={20} valueMax={200} name="2" ico=<BiSolidCircleThreeQuarter/> info="Total de empleados" fon="green"/>
            <Dash value={30} valueMax={300} name="2" ico=<FaClock/> info="Total de empleados" fon="orange"/>
            <Dash value={40} valueMax={400} name="2" ico=<IoWarning/> info="Total de empleados" fon="red"/>
        </div>
        <div className="sepa"></div>
        <div className="btm">
                <div className="aja">
                  <BasicBars />
                </div>
                <div className="aje">
                <BasicBars />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default system

