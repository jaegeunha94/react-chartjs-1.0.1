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
      backgroundColor: 'rgba(255, 99, 132, 0.2)', // pink color with some transparency
      data: [65, 59, 90, 81, 56, 55, 40], // example data points for this dataset
      label: 'Data for 2020' // a label for this dataset
    },
    {
      backgroundColor: 'rgba(54, 162, 235, 0.2)', // blue color with some transparency
      data: [28, 48, 40, 19, 96, 27, 100], // another set of data points
      label: 'Data for 2021' // a label for this second dataset
    },
    {
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // greenish color with some transparency
      data: [35, 100, 51, 50, 20, 70, 80], // third set of data points
      label: 'Data for 2022' // label for the third dataset
    }
  ],
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'] // common labels for all datasets
};

export default function RadarChart() {
  return <Radar data={data} options={options}/>;
}