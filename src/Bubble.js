import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  scales: {
    x: {
        //min: 0,
        //max: 100,
    },
    y: {
      beginAtZero: true,
      //min: 0,
     // max: 100,
    },
  },
};

const data = {
  datasets: [
      {
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          data: [
              { x: 20, y: 30, r: 15 },
              { x: 40, y: 10, r: 10 },
              { x: 25, y: 25, r: 8 },
              { x: 10, y: 10, r: 5 },
          ],
          label: 'Dataset 1'
      },
      {
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          data: [
              { x: 15, y: 25, r: 7 },
              { x: 30, y: 5, r: 14 },
              { x: 45, y: 20, r: 10 },
              { x: 20, y: 35, r: 18 },
          ],
          label: 'Dataset 2'
      },
      {
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          data: [
              { x: 30, y: 40, r: 12 },
              { x: 25, y: 10, r: 9 },
              { x: 35, y: 30, r: 16 },
              { x: 40, y: 45, r: 5 },
          ],
          label: 'Dataset 3'
      }
  ]
};

export default function BubbleChart() {
  return <Bubble options={options} data={data} />;
}