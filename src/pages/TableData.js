
import React from 'react';
import { useTable, useSortBy } from 'react-table';
import './TableData.css'; 

function TableData() {
  const data = React.useMemo(
    () => [
      { Campaigns: 'Cosmetics', Click: 712, Cost: 'USD 4272', Conversions: 8, Revenue: 'USD 16,568' },
      { Campaigns: 'Serums', Click: '3,961', Cost: 'USD 27,331', Conversions: 115, Revenue: 'USD 362,568' },
      { Campaigns: 'Facewash', Click: '9,462', Cost: 'USD 76,831', Conversions: 123, Revenue: 'USD 266,800' },
      { Campaigns: 'Shampoos', Click: 439, Cost: 'USD 2,151', Conversions: 5, Revenue: 'USD 11,029' },
      { Campaigns: 'Conditioners', Click: '1,680', Cost: 'USD 3,864', Conversions: 49, Revenue: 'USD 623,106' },
      { Campaigns: 'Fashwash 2', Click: '4,978', Cost: 'USD 29,370', Conversions: 27, Revenue: '2011/01/25' },
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
    <div className='fluid'>
       <table {...getTableProps()} className="sorting-table">
  <thead>
    <tr>
      <th colSpan={columns.length} className="extra-header">
        
        <div className='text-tree'>Ad Insights</div>
        <div className='icons-one'><i className="bi bi-question-circle"></i></div>
      </th>
    </tr>
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

      </div>
    
  );
}

export default TableData;
  
        
          
      

 
