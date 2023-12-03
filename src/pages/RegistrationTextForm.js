import React, { useState } from 'react';
import { Form, Button, Card, Row, Col,Modal } from 'react-bootstrap';
import "./RegistrationForm.css"
import { useNavigate } from 'react-router-dom';
const RegistrationTextForm = () => {
  const [heading01, setHeading01] = useState('');
  const [heading02, setHeading02] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [websiteURL, setWebsiteURL] = useState('');
  const [description01, setDescription01] = useState('');
  const [buttonLabel, setButtonLabel] = useState('');
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

 
  const handleSubmit = (e) => {
    e.preventDefault();
    
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

  const handleBack = () => {
  
    navigate('/createads');
  };
 

  return (
    <Card style={{ width: '95%', height: '550px', margin: '30px'  }}>
    <div className="cards-container">
    
      <Card.Body>
        <h5>Create Text & media</h5>
        <Form onSubmit={handleSubmit}>
          <Row>
           
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

              <Form.Group className="mb-3" controlId="formBusinessName">
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

              <Form.Group className="mb-3" controlId="formButtonLabel">
                <Form.Label>Button Label</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Button Label"
                  value={buttonLabel}
                  onChange={(e) => setButtonLabel(e.target.value)}
                />
              </Form.Group>

            </Col>
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
          <Button variant="light" className="me-2 margin" onClick={handleBack}>
            Back
          </Button>
          <Button variant="primary"className="me-2 margin" type="submit">
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

export default RegistrationTextForm;
