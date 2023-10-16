import React from 'react';
import Shipments from './shipment';
import Stock from './stock';
import WarehouseAnalysis from './warehouse-analysis';
import {Link} from 'react-router-dom';
function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Warehouse Management Dashboard</h1>
      <div className="dashboard-content">
        <Shipments />
      </div>
      <div className="dashboard-content2">
        <Stock />

        </div>
      {/* <WarehouseAnalysis /> */}
    </div>
  );
}

export default Dashboard;
