// WarehouseAnalysis.js

import React, { useState, useEffect } from 'react';
import { stockData } from './stock'; // Import stockData from stock.js
import Chart from 'chart.js/auto';

function WarehouseAnalysis() {
  // Calculate the total quantity
  const totalQuantity = stockData.reduce((total, item) => total + item.quantity, 0);

  // Define a constant for the total space
  const totalSpace = 500; // Define your constant value (total space available)

  // Calculate the free space
  const freeSpace = totalSpace - totalQuantity;

  // Calculate the space filled as a percentage
  const spaceFilledPercentage = (totalQuantity / totalSpace) * 100;

  const data = {
    labels: ['Space Filled', 'Free Space'],
    datasets: [
      {
        data: [spaceFilledPercentage, 100 - spaceFilledPercentage],
        backgroundColor: ['#FF5733', '#33FF86'],
      },
    ],
  };

  // Create the pie chart
  const ctx = document.getElementById('spaceChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: data,
  });

  // Create a pie chart or progress bar to visualize the space filled
  // You can use charting libraries like Chart.js or simple CSS styles for this.

  return (
    <div className="warehouse-analysis">
      <h2>Warehouse Analysis</h2>
      <div className="space-indicator">
        <p>Free Space: {freeSpace} units</p>
        <p>Space Filled: {spaceFilledPercentage.toFixed(2)}%</p>
      </div>
      {/* Create a pie chart or progress bar here to visualize the space filled */}
      {<canvas id="spaceChart" width="400" height="400"></canvas>}

    </div>
  );
}

export default WarehouseAnalysis;



