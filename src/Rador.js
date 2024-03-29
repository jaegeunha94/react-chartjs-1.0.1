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

const options = {
  responsive: true,
  maintainAspectRatio: true,

  scales: {
    r: {
        angleLines: {
            display: true
        },
        min: 0,
        max: 100,
        ticks: {
          callback: function (value, index, ticks) {
            return '$' + this.getLabelForValue(value) + '$';
          },
        },
    }
  }
};

export const data = {
  datasets: [
    {
      backgroundColor: 'rgba(255, 99, 132, 0.2)', 
      data: [65, 59, 90, 81, 56, 55, 40], 
      label: 'Dataset 1' 
    },
    {
      backgroundColor: 'rgba(54, 162, 235, 0.2)', 
      data: [28, 48, 40, 19, 96, 27, 100], 
      label: 'Dataset 2' 
    },
    {
      backgroundColor: 'rgba(75, 192, 192, 0.2)', 
      data: [35, 100, 51, 50, 20, 70, 80], 
      label: 'Dataset 3' 
    }
  ],
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'] 
};

export default function RadarChart() {
  return <Radar data={data} options={options}/>;
}