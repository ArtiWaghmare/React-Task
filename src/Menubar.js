import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import {Container, Navbar} from 'react-bootstrap';

import Navigation from './components/Navigation';
import RegistrationForm from './pages/RegistrationTextForm';
import RegistrationMediaForm from './pages/RegistrationMediaForm';
import DonutChart from './pages/DonutChart';

import CreatesAds from './pages/CreatesAds';
import { Card,  } from 'react-bootstrap';
import Dashboard from './components/Dashboard';

function Menubar() {
  return (
 

<div className="">



      <Navigation/>
   
        <Routes>
        
          <Route path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="registration-text" element={<RegistrationForm/>} />
          <Route path="/registration-media" element={ <RegistrationMediaForm/>}/>
          <Route path="/createads" element={<CreatesAds/>} />
        
          
        
         
        </Routes>
     
     
    </div>


  );
}

export default Menubar;
