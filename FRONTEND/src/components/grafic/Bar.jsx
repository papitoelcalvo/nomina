import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars(props) {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: [props.a , 'group B', 'group C'] }]}
      series={[ {  data: [10, 3, 5]}, 
                { data: [1, 6, 3] },
                { data: [2, 5, 9] },
                {  data: [4, 3, 5]}, 
                { data: [1, 6, 3] },
                { data: [2, 5, 9] }
            
            ]}
      width={470}
      height={240}
    />
  );
}