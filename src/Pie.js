import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ],
      data: [300, 50, 100, 40, 120, 160],
      label: "Dataset 1",
    }
  ],
  labels: ["January", "February", "March", "April", "May", "June"],
};

export default function PieChart() {
  return <Pie data={data} />;
}