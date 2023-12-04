
import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { Card } from 'react-bootstrap';
import "./DonutChart.css"
function DonutChart() {
  const data = React.useMemo(
    () => [
      { Campaigns: 'Cosmetics', Click: 712, Cost: 'USD 4272', Conversions: 8, Revenue: 'USD 16,568' },
      { Campaigns: 'Serums', Click: '3,961', Cost: 'USD 27,331', Conversions: 115, Revenue: 'USD 362,568' },
      { Campaigns: 'Facewash', Click: '9,462', Cost: 'USD 76,831', Conversions: 123, Revenue: 'USD 266,800' },
      
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Campaigns', accessor: 'Campaigns' },
      { Header: 'Click', accessor: 'Click' },
      { Header: 'Cost', accessor: 'Cost' },
      { Header: 'Conversions', accessor: 'Conversions' },
      { Header: 'Revenue', accessor: 'Revenue' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()} className="table-sort">
    <thead>
      
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
              {column.render('Header')}
              <i className="bi bi-chevron-expand"></i>
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => (
              <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            ))}
          </tr>
        );
      })}
    </tbody>
    <tfoot>
      <tr>
        <th>Total</th>
        <th>26,510</th>
        <th>USD 1,43819</th>
        <th>489</th>
        <th>USD 15,73,563</th>
      </tr>
    </tfoot>
  </table>
  
      
      
    );
  }
  
  export default DonutChart;
  
  
  
        
          
      

  