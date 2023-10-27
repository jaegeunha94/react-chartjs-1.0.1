import React from 'react';
import './style.css';

import CharBar from './CharBar';
import BubbleChart from './Bubble';
import DoughnutChart from './Dogunut';
import PieChart from './Pie';
import RadarChart from './Rador';
import ScatterChart from './Scatter';
import { LineGraph } from './ LineChart';

export default function App() {
  return (
    <div>
      <CharBar />
      <LineGraph />
      <BubbleChart />
      <DoughnutChart />
      <PieChart />
      <RadarChart/>
      <ScatterChart />
    </div>
  );
}
