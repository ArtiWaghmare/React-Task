import React from 'react';
import { Card, Button, CardFooter } from 'react-bootstrap';
import './CrateAd.css';
import { Link } from 'react-router-dom';

function CreatesAds() {
  return (
    <div className='height-width'>
     <Card style={{  margin: '20px',  }}>
        <Card.Header className='popins' style={{  background: 'transparent', border: 'none' }}>Creats Ads</Card.Header>
        <Card.Body >
          <div class="container"style={{ width: '40%', height: '30%', background: 'transparent', border: 'none' }}>
          <div class="row " style={{  background: 'transparent',  border: 'none'  }}>
          <div class="col-sm">
             <Card  style={{   border: 'none', }}>
             <Card.Header style={{ width: '10%', height: '30px', background: 'transparent', border: 'none' }}>
                  <input type="checkbox" style={{ marginRight: '20px', width: '20px', height: '20px' }} />
                </Card.Header>
              <Card.Body> <Card.Img
                  src='/images/Text-1.png'
                  alt='...'
                  variant='top'
                  style={{
                    borderRadius: '10px',
                    margin: '10px',
                    padding: '1px',
                    width: '100%',
                    height: '250px',
                  }}
                /></Card.Body>
              <Card.Footer className="text-center" style={{ width: '100%', height: '70px', border: 'none' }}>
                  <span>Create</span>
                  <Card.Title><Link to="/registration-text" style={{ textDecoration: 'none', color: 'black',fontWeight:'bold'  }}>Text Ad</Link></Card.Title>
                </Card.Footer>
             </Card>
            </div>

            
            <div class="col-sm">
             <Card  style={{   border: 'none',}}>
             <Card.Header style={{ width: '10%', height: '30px', background: 'transparent', border: 'none' }}>
                  <input type="checkbox" style={{ marginRight: '5px', width: '20px', height: '20px' }} />
                </Card.Header>
              <Card.Body> <Card.Img
                  src='/images/Media.png'
                  alt='...'
                  variant='top'
                  style={{
                    borderRadius: '10px',
                    margin: '10px',
                    padding: '1px',
                    width: '100%',
                    height: '250px',
                  }}
                /></Card.Body>
              <Card.Footer className="text-center" style={{ width: '100%', height: '70px', border: 'none' }}>
                  <span>Create</span>
                  <Card.Title><Link to="/registration-text" style={{ textDecoration: 'none', color: 'black',fontWeight:'bold' }}>Text Ad</Link></Card.Title>
                </Card.Footer>
             </Card>
            </div>

          </div>
        </div></Card.Body>
        <Card.Footer style={{  background: 'transparent', border: 'none' }}><div className="d-flex justify-content-end ">
          <Button variant="primary" className="me-2">
            Next
          </Button>
        </div></Card.Footer>
      </Card>

    </div>
  );
}

export default CreatesAds;

