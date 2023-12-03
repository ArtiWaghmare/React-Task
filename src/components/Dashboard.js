
import React from 'react'
import Charts from '../pages/Charts'
import TableData from '../pages/TableData'

function Dashboard() {
  return (
    <div class="container-fluid">
    <div class="row">
      <div class="col-6">
     <TableData/>
      </div>
      <div class="col-6">
      <Charts/>
      </div>
    </div>
    
    </div>
  )
}

export default Dashboard