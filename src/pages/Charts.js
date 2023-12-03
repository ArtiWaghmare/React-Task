import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, Button } from 'react-bootstrap'; 
import './Chart.css';

import DonutTable from './DonutTable';

const Charts = () => {
  const [chartData, setChartData] = useState({
    series: [40, 25, 35],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Male', 'Unknown', 'Female'],
      colors: ['#008FFB', '#1A1919', '#EC5C08'],
      plotOptions: {
        pie: {
          customScale: 1,
          donut: {
            size: '60%',
            background: 'transparent',
            labels: {
              total: {
                fontSize: '16px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                color: '#1A1919',
              },
            },
          },
        },
      },
      annotations: {
        labels: [
          {
            borderColor: '#1A1919',
            borderWidth: 2,
            text: 'Male',
            textAnchor: 'start',
            offsetX: -30,
            offsetY: -20,
            borderRadius: 40,
          },
          {
            borderColor: '#1A1919',
            borderWidth: 2,
            text: 'Unknown',
            textAnchor: 'start',
            offsetX: -30,
            offsetY: 0,
            borderRadius: 4,
          },
          {
            borderColor: '#1A1919',
            borderWidth: 7,
            text: 'Female',
            textAnchor: 'start',
            offsetX: 10,
            offsetY: 2,
            borderRadius: 0,
          },
        ],
      },
    },
  });

  const [showChart, setShowChart] = useState(true);

  const handleButtonClick = () => {
    setShowChart(!showChart);
  };

  return (
    <div className='fluid'>
      <Card>
        <Card.Header style={{ background: 'transparent' }}>
          <div className="container" >
            <div className="row">
              <div className="col-sm conss">
                Ad Insights
              </div>
              <div className="col-sm">
              <div className="col-sm">
               
              </div>
              </div>
              <div className="col-sm width conss">
                <select name="cars" id="cars" form="carform"style={{ width: '100px', height: '30px',border: '1px solid #d3d3d3' }}>
                  <option value="volvo">Click</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
                &nbsp; &nbsp;
                <i className="bi bi-question-circle"></i>
              </div>
            </div>
          </div>
        </Card.Header>

       <div style={{ width: '400px', height: '100px',  marginTop: '10px',marginBottom:'10px', border: 'none'   }}>
          {showChart ? (
            <ReactApexChart options={chartData.options} series={chartData.series} type="donut"  />
          ) : (
            <DonutTable  />
          )}
      </div>

        <Card.Footer style={{ background: 'none', border: 'none',marginTop:'90px'}}>
          <div className='icons'>
          <Button variant="light" onClick={handleButtonClick}>

  <span className="bi bi-opencollective"></span>
  
  &nbsp;
  <span id="boot-icon" className="bi bi-table"></span>
</Button>

          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Charts;

