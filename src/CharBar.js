import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: true,

  scales: {
      x: {
        min: 0,
        max: 100,
        stacked: true,
        ticks: {
          callback: function (value, index, ticks) {
            return this.getLabelForValue(value) + '$';
          },
        },
      },

      y: {
        ticks: {
          callback: function (value, index, ticks) {
            return this.getLabelForValue(value) + '$';
          },
        },
      },
  },
};

const data = {
  datasets: [
      {
          backgroundColor: "rgba(255,99,132,0.2)",
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Dataset 1'
      },
      {
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Dataset 2'
      },
      {
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          data: [18, 48, 77, 9, 100, 27, 40],
          label: 'Dataset 3'
      }
  ],
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
};

export default function CharBar() {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
