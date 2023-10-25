import React from 'react';
import './style.css';

import CharBar from './CharBar';
import BubbleChart from './Bubble';
import DoughnutChart from './Dogunut';
import PieChart from './Pie';

export default function App() {
  return (
    <div>
      <CharBar />
      <BubbleChart />
      <DoughnutChart />
      <PieChart />
    </div>
  );
}
