import React from 'react';
import shipmentsData from './ShipmentData';
const stockData = [...shipmentsData];

function Stock() {
  return (
    <div className="stock-container">
        <h2>Current Stock</h2>
    <div className="stock">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((item) => (
            <tr key={item.id}>
              <td>{item.product}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    <button>view complete stock analysis</button>
    </div>

  );
}

export default Stock;
export {stockData};
