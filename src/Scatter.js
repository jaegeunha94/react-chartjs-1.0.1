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

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: true,

  scales: {
      x: {
        min: 0,
        max: 100,
        ticks: {
          callback: function (value, index, ticks) {
            return '$' + this.getLabelForValue(value) + '$';
          },
        },
      },

      y: {
        beginAtZero: true,
        min: 0,
        max: 50,
        ticks: {
           callback: function (value, index, ticks) {
             return '$' + this.getLabelForValue(value) + '$';
           },
        },
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
      label: 'Dataset 1',
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
      label: 'Dataset 2',
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
      label: 'Dataset 3',
    }
  ],
};

export default function ScatterChart() {
  return <Scatter options={options} data={data} />;
}