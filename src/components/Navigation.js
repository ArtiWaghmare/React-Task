import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"

function Navigation() {
  return (
    <div>
      <div className="border-bottom">
        <nav className="navbar"style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <div className="container-fluid ">
            <Link to="/" className="navbar-brand mb-0 h2">App Logo</Link>
            <div className='font'>
     <Link to="/dashboard" className="navbar-brand mb-0" style={{ fontSize: '14px' }}>DASHBOARD</Link>
    <Link to="/createads" className="navbar-brand mb-0" style={{ fontSize: '14px' }}>Create Ads</Link>
   </div>


          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
