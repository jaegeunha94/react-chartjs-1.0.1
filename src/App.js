import React from 'react';
import './style.css';

import CharBar from './CharBar';
import BubbleChart from './Bubble';
import DoughnutChart from './Dogunut';
import PieChart from './Pie';
import RadarChart from './Rador';
import ScatterChart from './Scatter';
import LineChart from './ LineChart';

export default function App() {
  return (
    <div>
      <CharBar />
      <BubbleChart />
      <DoughnutChart />
      <PieChart />
      <LineChart />
      <RadarChart/>
      <ScatterChart />
    </div>
  );
}
