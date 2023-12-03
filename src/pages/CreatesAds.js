


import React from 'react';
import { Card, Button } from 'react-bootstrap';
import "./CrateAd.css";
import { Link } from 'react-router-dom';

function CreatesAds() {
    return (
        <Card style={{ width: '94%', height: '600px', margin: '30px' }}>
            <div className="card-container">


                <span className='text'>Create Ads</span>
                <Card.Body>
                    <div className="card-deck">


                        <Card className='card-one'>
                            <Card.Header style={{ width: '260px', height: '30px', background: 'transparent', border: 'none' }}>
                                <input type="checkbox" style={{ marginRight: '5px', width: '20px', height: '20px' }} />

                            </Card.Header>
                            <Card style={{ width: '190px', height: '210px' }}>
                                <Card.Img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLwz48shBff0x5Cd3_wuDWMy8cmVdozMHWg&usqp=CAU'
                                    alt='...'
                                    variant='top'
                                    style={{
                                        borderRadius: '10px',
                                        margin: '30px',
                                        padding: '1px',
                                        width: '130px',
                                        height: '170px'
                                    }}
                                />
                            </Card>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-center" style={{ width: '260px', height: '70px', border: 'none' }}>
                                <span>Create</span>
                                <Card.Title>     <Link to="/registration-text" style={{ textDecoration: 'none', color: 'black' }}>Text Ad</Link></Card.Title>
                            </Card.Footer>
                        </Card>

                        <Card className='card-one'>
                            <Card.Header style={{ width: '260px', height: '30px', background: 'transparent', border: 'none' }}>
                                <input type="checkbox" style={{ marginRight: '5px', width: '20px', height: '20px' }} />

                            </Card.Header>
                            <Card style={{ width: '190px', height: '210px' }}>
                                <Card.Img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnyi2fPljl_oq4iMhmjwMZ6tSwSDb1_AvJ2BungwbVjAXQP5_7f1akq3l3Q&s'
                                    alt='...'
                                    variant='top'
                                    style={{
                                        borderRadius: '10px',
                                        margin: '30px',
                                        padding: '1px',
                                        width: '120px',
                                        height: '170px'


                                    }}
                                />
                            </Card>
                            <Card.Body>

                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-center" style={{ width: '260px', height: '70px', border: 'none' }}>
                                <span>Create</span>
                                <Card.Title><Link to="/registration-media" style={{ textDecoration: 'none', color: 'black' }}>Media Ad</Link></Card.Title>
                            </Card.Footer>
                        </Card>
                    </div>
                </Card.Body>
                <div className="d-flex justify-content-end ">
                    <Button variant="primary" className="me-2">
                        Next
                    </Button>

                </div>

            </div>
        </Card>
    );
}

export default CreatesAds;

