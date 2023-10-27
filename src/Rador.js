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
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

export default function RadarChart() {
  return <Radar data={data} options={options}/>;
}