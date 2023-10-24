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
  // 반응형 옵션
  responsive: true,
  maintainAspectRatio: true,

  plugins: {
    // Tooltip 옵션
    tooltip: {
      usePointStyle: 'star',
      caretSize: 0,
      // position: 'nearest',
      interaction: {
        //   // 1. point
        //   // mode: 'point',
        //   // 2. nearest
        // mode: 'nearest',
        //   // 3. index
        mode: 'index',
        //   // axis: 'y',
        //   //4. dataset
        //   // mode: 'dataset',
      },
    },
    // labels: {
    //   render: 'value',
    // },
    legend: {
      // position: 'top',
      position: 'bottom',
      // display: false,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },

  // Axis
  x: {
    // alignToPixels: true,
    // backgroundColor: 'red',
    // border: ???,
    // display: false,
    // grid: ???,
    // reverse: true,
    // stacked: true,
    // suggestedMin: 1000,
    // suggestedMax: 100,
    // ticks: ???,
    // weight: 500,
  },

  y: {
    // alignToPixels: true,
    // backgroundColor: 'red',
    // border: ???,
    // display: false,
    // grid: ???,
    // min: 0,
    // max: 100,
    // reverse: true,
    // stacked: true,
    // suggestedMin: 1000,
    // suggestedMax: 100,
    // ticks: ???,
    // weight: 100,
  },

  // Scale
  scales: {
    x: {
      // Axis
      // alignToPixels: true,
      // backgroundColor: 'red',
      // border: ???,
      // display: false,
      // grid: ???,
      // min: 0,
      // max: 100,
      // reverse: true,
      // stacked: true,
      // suggestedMin: 500,
      // suggestedMax: 100,
      // ticks: ???,
      // weight: 100,
      // min: 0,
      // max: 100,

      // Labeling Axes
      // display: false,
      // align: 'end',
      // text: '???',
      // color: 'red',
      // font: '???',
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value, index, ticks) {
          return this.getLabelForValue(value) + '$';
        },
      },

      // scale
      grid: {
        // offset: false,
      },
    },
  },
  y: {
    // Axis
    // alignToPixels: true,
    // backgroundColor: 'red',
    // border: ???,
    // display: false,
    // grid: ???,
    // min: 0,
    // max: 100,
    // reverse: true,
    // stacked: true,
    // suggestedMin: 500,
    // suggestedMax: 100,
    // ticks: ???,
    // weight: 100,
    // min: 0,
    // max: 100,

    // Labeling Axes
    // display: false,
    // align: 'end',
    // text: '???',
    // color: 'red',
    // font: '???',
    ticks: {
      // Include a dollar sign in the ticks
      callback: function (value, index, ticks) {
        return this.getLabelForValue(value) + '$';
      },
    },

    // scale
    grid: {
      // offset: false,
    },
  },
};

const data = {
  labels: ['CPU', 'Memory', 'Disk', 'DiskIO', 'Inlet', 'Inside', 'Outlet'],
  datasets: [
    {
      data: [2000, 1250, 1750, , 10, 1000, 2250, 2400],
      label: 'Host 1',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      data: [200, 125, 170, , 100, 250, 240],
      label: 'Host 2',
      backgroundColor: 'blue',
    },
    {
      
      data: [3000, 3250, 3750, 300, 3000, 3250, 3400],
      label: 'Host 3',
      backgroundColor: 'green',
    },
    {
      label: 'Host 4',
      data: [1000, 1250, 1750, 100, 2000, 2250, 400],
      backgroundColor: 'orange',
    },
  ],
};

export default function CharBar() {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
