// src/components/Stats.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js';

const Stats = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Observations',
        data: [12, 19, 3, 5],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <div>
      <h2>Graphiques des Observations</h2>
      <Line data={data} />
    </div>
  );
};

export default Stats;
