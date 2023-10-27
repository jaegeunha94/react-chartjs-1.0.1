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
      label: 'A dataset',
      data: Array.from({ length: 100 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
      })),
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

export default function ScatterChart() {
  return <Scatter options={options} data={data} />;
}