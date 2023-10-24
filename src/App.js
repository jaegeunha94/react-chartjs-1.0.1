import React from 'react';
import './style.css';

import CharBar from './CharBar';
import BubbleChart from './Bubble';
import DoughnutChart from './Dogunut';

export default function App() {
  return (
    <div>
      <CharBar />
      <BubbleChart />
      <DoughnutChart />
    </div>
  );
}
