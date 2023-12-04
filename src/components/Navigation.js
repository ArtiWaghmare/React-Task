// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./Nav.css"

// function Navigation() {
//   return (
//     <div>
//       <div className="border-bottom">
//         <nav className="navbar" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
//           <div className="container-fluid">
//             <Link to="/" className="navbar-brand mb-0 h2"style={{ fontWeight: 'bold',fontSize: '24px'  }}>App Logo</Link>
//             <div className='font'>
//               <Link to="/dashboard" className="navbar-brand mb-0" style={{ fontSize: '18px' }}>DASHBOARD</Link>
//               <Link to="/createads" className="navbar-brand mb-0" style={{ fontSize: '18px' }}>Create Ads</Link>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Navigation;





import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body  border-bottom" > 
      <Container fluid>
        <Navbar.Brand href="#" style={{ fontWeight: 'bold',fontSize: '24px'  }}>App Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           </Nav>
           <div className='font'>
          <Link to="/dashboard" className="navbar-brand mb-0" style={{ fontSize: '17px' }}>DASHBOARD</Link>
          <Link to="/createads" className="navbar-brand mb-0" style={{ fontSize: '17px' }}>Create Ads</Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;  
           
            
             
           
        