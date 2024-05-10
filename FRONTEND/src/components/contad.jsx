import React from 'react'
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

function Contad(props) {
  return (
    <Gauge
    value={props.value}
    startAngle={-110}
    endAngle={110}
    valueMax={props.valueMax}
    height={120}
    width={120}
    sx={{
      [`& .${gaugeClasses.valueText}`]: {
        fontSize: 18,
        transform: 'translate(0px, 0px)',
      },
    }}
    text={
       ({ value, valueMax }) => `${value} / ${valueMax}`
    }
  />
  )
}

export default Contad