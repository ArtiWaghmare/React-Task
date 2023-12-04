import React from 'react';
import Charts from '../pages/Charts';
import TableData from '../pages/TableData';

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <TableData />
        </div>
        <div className="col-md-6">
          <Charts />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
