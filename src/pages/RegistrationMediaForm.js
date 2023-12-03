import React, { useState } from 'react';
import { Form, Button, Card, Row, Col,Modal  } from 'react-bootstrap';
import "./RegistrationForm.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const RegistrationMediaForm = () => {
  const [heading01, setHeading01] = useState('');
  const [heading02, setHeading02] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [websiteURL, setWebsiteURL] = useState('');
  const [description01, setDescription01] = useState('');
  const [buttonLabel, setButtonLabel] = useState('');
  const [landscapeImage, setLandscapeImage] = useState('');
  const [portraitImage, setPortraitImage] = useState('');
  const [squareImage, setSquareImage] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    setButtonLabel(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', {
      heading01,
      heading02,
      businessName,
      websiteURL,
      description01,
      buttonLabel,
    });
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleBack = () => {
    // Add your back button logic here
    navigate('/createads');
  };
 

  

  return (
  
       <Card style={{ width: '95%', height: '700px', margin: '30px'  }}>
         <div className="cards-container">
      <Card.Body>
        <h5>Create Text & media</h5>
        <Form onSubmit={handleSubmit}>
          <Row>
            {/* First Column */}
            <Col>
              <Form.Group className="mb-3" controlId="formHeading01">
                <Form.Label>Heading 01</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add a heading that would make users interested"
                  value={heading01}
                  onChange={(e) => setHeading01(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formHeading02">
                <Form.Label>Heading 02</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add a heading that would make users interested"
                  value={heading02}
                  onChange={(e) => setHeading02(e.target.value)}
                />
              </Form.Group>

             
            </Col>

            {/* Second Column */}
            <Col>
              <Form.Group className="mb-3" controlId="formDescription01">
                <Form.Label>Description 01</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Add primary text to help users understand more about products, services of ofers"
                  value={description01}
                  onChange={(e) => setDescription01(e.target.value)}
                  style={{ resize: 'vertical', minHeight: '122px' }}
                />

              </Form.Group>
              </Col>
              </Row>
              <Row className="mb-3">
        <Col>
          <Form.Group controlId="landscapeImage">
            <Form.Label>Landscape Marketing Image</Form.Label>
            <Form.Control
              type="url"
              placeholder="Add the URL of the image for the ad"
              value={landscapeImage}
              onChange={(e) => setLandscapeImage(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="portraitImage">
            <Form.Label>Portrait Marketing Image</Form.Label>
            <Form.Control
              type="url"
              placeholder="Add the URL of the image for the ad"
              value={portraitImage}
              onChange={(e) => setPortraitImage(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="squareImage">
            <Form.Label>Square Marketing Image</Form.Label>
            <Form.Control
              type="url"
              placeholder="Add the URL of the image for the ad"
              value={squareImage}
              onChange={(e) => setSquareImage(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
              
      <Form.Group className="mb-3" controlId="formVideoURL">
  <Form.Label>Video URL</Form.Label>
  <Form.Control
    type="text"
    placeholder="Enter Video URL"
    value={videoURL}
    onChange={(e) => setVideoURL(e.target.value)}
  />
</Form.Group>
User
<Row>
              <Col>  <Form.Group className="mb-3" controlId="formBusinessName">
                <Form.Label>Business Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Business Name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </Form.Group>
              </Col>
              <Col> 
              <Form.Group className="mb-3" controlId="formButtonLabel">
      <Form.Label>Button Label</Form.Label>
      <Form.Select
        value={buttonLabel}
        onChange={handleSelectChange}
      >
        <option value="">Select Button Label</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        {/* Add more options as needed */}
      </Form.Select>
    </Form.Group></Col>
              
              </Row>
     
             <Form.Group className="mb-3" controlId="formWebsiteURL">
                <Form.Label>Website URL</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Enter Website URL"
                  value={websiteURL}
                  onChange={(e) => setWebsiteURL(e.target.value)}
                />
              </Form.Group>
              <div className="d-flex justify-content-end margin">
              <Button variant="light" className="me-2  " onClick={handleBack}>
             Back
            </Button>
            <Button variant="primary" className="me-2 " type="submit">
            Submit
          </Button>
          </div>
          <Modal show={showModal} onHide={handleClose} className="custom-modal">
            
          
         
            <Modal.Body className="custom-modal-body">
           
          
            <div className="column-container">
        <i className="bi bi-check-circle-fill blue-icon"></i>
        <div className="text-one">Submitted</div>
         </div>

            </Modal.Body>
            
           
          </Modal>
         
        </Form>

      </Card.Body>
      </div>
    </Card>
  
  );
};

export default RegistrationMediaForm;
