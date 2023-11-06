import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const options = {
  // 반응형 옵션
  responsive: true,
  maintainAspectRatio: true,

  scales: {
    r: {
        angleLines: {
            display: false
        },
        //min: 0,
        //max: 100
    }
  }
};

export const data = {
  datasets: [
    {
      backgroundColor: 'rgba(255, 99, 132, 0.2)', 
      data: [65, 59, 90, 81, 56, 55, 40], 
      label: 'Data for 2020' 
    },
    {
      backgroundColor: 'rgba(54, 162, 235, 0.2)', 
      data: [28, 48, 40, 19, 96, 27, 100], 
      label: 'Data for 2021' 
    },
    {
      backgroundColor: 'rgba(75, 192, 192, 0.2)', 
      data: [35, 100, 51, 50, 20, 70, 80], 
      label: 'Data for 2022' 
    }
  ],
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'] 
};

export default function RadarChart() {
  return <Radar data={data} options={options}/>;
}