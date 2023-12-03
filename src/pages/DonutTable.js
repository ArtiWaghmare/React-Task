import React, { useState } from 'react';

import DonutChart from './DonutChart';

import Charts from './Charts';
function DonutTable (){
  const [selectedComponent, setSelectedComponent] = useState('donut'); 

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    

        <div>
       
          {selectedComponent === 'donut' && <DonutChart />}
          {selectedComponent === 'chart' && <Charts />}
        </div>
   

  );
};

export default DonutTable;
