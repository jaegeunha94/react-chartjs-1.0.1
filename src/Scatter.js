import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  // 반응형 옵션
  responsive: true,
  maintainAspectRatio: true,

  scales: {
      x: {
        //min: 0,
        //max: 100,
        //stacked: true,
        // ticks: {
        //   // Include a dollar sign in the ticks
        //   callback: function (value, index, ticks) {
        //     return this.getLabelForValue(value) + '$';
        //   },
        // },
      },

      y: {
        // Axis
        beginAtZero: true,
        //min: 0,
        //max: 50
        //stacked: true,
        // ticks: {
        //   // Include a dollar sign in the ticks
        //   callback: function (value, index, ticks) {
        //     return this.getLabelForValue(value) + '$';
        //   },
        // },
      },
  },
};

export const data = {
  datasets: [
    {
      backgroundColor: 'rgba(255, 99, 132, 1)',
      data: [
        { x: 10, y: 20 },
        { x: 15, y: 10 },
        { x: 7, y: 8 },
        { x: 12, y: 3 },
        { x: 13, y: 5 },
        { x: 6, y: 15 },
        { x: 8, y: 12 },
      ],
      label: 'Group A',
    },
    {
      backgroundColor: 'rgba(54, 162, 235, 1)',
      data: [
        { x: 6, y: 25 },
        { x: 7, y: 35 },
        { x: 8, y: 28 },
        { x: 3, y: 15 },
        { x: 2, y: 10 },
        { x: 5, y: 20 },
        { x: 11, y: 18 },
      ],
      label: 'Group B',
    },
    {
      backgroundColor: 'rgba(75, 192, 192, 1)',
      data: [
        { x: 16, y: 5 },
        { x: 2, y: 20 },
        { x: 9, y: 15 },
        { x: 10, y: 18 },
        { x: 12, y: 9 },
        { x: 20, y: 6 },
        { x: 3, y: 14 },
      ],
      label: 'Group C',
    }
  ],
};

export default function ScatterChart() {
  return <Scatter options={options} data={data} />;
}