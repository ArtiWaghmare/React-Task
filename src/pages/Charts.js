// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';
// import { Card, Button } from 'react-bootstrap'; 
// import './Chart.css';

// import DonutTable from './DonutTable';

// const Charts = () => {
//   const [chartData, setChartData] = useState({
//     series: [40, 25, 35],
//     options: {
//       chart: {
//         type: 'donut',
//       },
//       labels: ['Male', 'Unknown', 'Female'],
//       colors: ['#008FFB', '#1A1919', '#EC5C08'],
//       plotOptions: {
//         pie: {
//           customScale: 1,
//           donut: {
//             size: '60%',
//             background: 'transparent',
//             labels: {
//               total: {
//                 fontSize: '16px',
//                 fontFamily: 'Helvetica, Arial, sans-serif',
//                 color: '#1A1919',
//               },
//             },
//           },
//         },
//       },
//       annotations: {
//         labels: [
//           {
//             borderColor: '#1A1919',
//             borderWidth: 2,
//             text: 'Male',
//             textAnchor: 'start',
//             offsetX: -30,
//             offsetY: -20,
//             borderRadius: 40,
//           },
//           {
//             borderColor: '#1A1919',
//             borderWidth: 2,
//             text: 'Unknown',
//             textAnchor: 'start',
//             offsetX: -30,
//             offsetY: 0,
//             borderRadius: 4,
//           },
//           {
//             borderColor: '#1A1919',
//             borderWidth: 7,
//             text: 'Female',
//             textAnchor: 'start',
//             offsetX: 10,
//             offsetY: 2,
//             borderRadius: 0,
//           },
//         ],
//       },
//     },
//   });

//   const [showChart, setShowChart] = useState(true);

//   const handleButtonClick = () => {
//     setShowChart(!showChart);
//   };

//   return (
//     <div className='fluid'>



//        <div className='donutcharts'>
//        <div style={{ background: 'transparent' }}>
//           <div className="container" >
//             <div className="row">
//               <div className="col-sm conss">
//                 Ad Insights
//               </div>
//               <div className="col-sm">
//               <div className="col-sm">

//               </div>
//               </div>
//               <div className="col-sm width conss">
//                 <select name="cars" id="cars" form="carform"style={{ width: '100px', height: '30px',border: '1px solid #d3d3d3' }}>
//                   <option value="volvo">Click</option>
//                   <option value="saab">Saab</option>
//                   <option value="opel">Opel</option>
//                   <option value="audi">Audi</option>
//                 </select>
//                 &nbsp; &nbsp;
//                 <i className="bi bi-question-circle"></i>
//               </div>
//             </div>
//           </div>
//         </div>

//            <div className='donutt'> <ReactApexChart options={chartData.options} series={chartData.series} type="donut"  /></div>

//       </div>



//     </div>
//   );
// };

// export default Charts;




import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, Button } from 'react-bootstrap';
import './Chart.css';

import DonutTable from './DonutTable';
import DonutChart from './DonutChart';

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

  const [showCharts, setShowCharts] = useState(true);

  const handleButtonClick = () => {
    setShowCharts(!showCharts);
  };

  return (
    <div className='fluid'>
<Card>
        <Card.Header style={{ background: 'transparent' }}>
          <div className="container">
            <div className="row">

              <div className="col-sm">
                Ad Insights
              </div>

              <div className="col-sm text-right">

                <select name="cars" id="cars" form="carform" style={{ width: '100px', height: '30px', border: '1px solid #d3d3d3', alignItems: 'right' }}>
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


        <div className='donutt'>


          <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            {showCharts ? (
              <ReactApexChart options={chartData.options} series={chartData.series} type="donut" />
            ) : (
              <DonutChart />
            )}


          </div>


        </div>


        <Card.Footer style={{ background: 'none', border: 'none', marginTop: '50px' }}>
          <div className='icons'>
            <Button variant="light" onClick={handleButtonClick}>
              {showCharts ? (
                <>
                  <span className="bi bi-table"></span>
                  &nbsp;
                  <span className="bi bi-opencollective"></span>
                </>
              ) : (
                <>
                  <span className="bi bi-opencollective"></span>
                  &nbsp;
                  <span className="bi bi-table"></span>
                </>
              )}
            </Button>
          </div>
        </Card.Footer>
      </Card>

   </div>

  );
};

export default Charts;









