import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
    // 반응형 옵션
    responsive: true,
    maintainAspectRatio: true,
  
    scales: {
        x: {
          //min: 0,
          //max: 100,
          //stacked: true,
        //   ticks: {
        //     // Include a dollar sign in the ticks
        //     callback: function (value, index, ticks) {
        //       return this.getLabelForValue(value) + '$';
        //     },
        //   },
        },
  
        y: {
          // Axis
          //min: 0,
          //max: 100,
          //stacked: true,
        //   ticks: {
        //     // Include a dollar sign in the ticks
        //     callback: function (value, index, ticks) {
        //       return this.getLabelForValue(value) + '$';
        //     },
        //   },
        },
    },
  };

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function LineGraph() {
  return <Line options={options} data={data} />;
}