import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Crop (){
    return(
        <>
        <Form>
        <h1>Crop Prediction</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nitrogen</Form.Label>
        <Form.Control type="text" placeholder="Enter Nitrogen" />
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Phosphorus</Form.Label>
         <Form.Control type="text" placeholder="Enter Phosphorous" />
         </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Potassium</Form.Label>
        <Form.Control type="text" placeholder="Enter Potassium" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Temperature</Form.Label>
      <Form.Control type="text" placeholder="Enter Temperature" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Ph</Form.Label>
    <Form.Control type="text" placeholder="Enter Ph" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Humidity</Form.Label>
  <Form.Control type="text" placeholder="Enter Humidity" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Rainfall</Form.Label>
  <Form.Control type="text" placeholder="Enter Rainfall" />
</Form.Group>

      
      <Button variant="primary" type="submit">
        Predict 
      </Button>
    </Form>
        <br />
        <h6> Result is Rice </h6>
        <br/>
        </>
    )
}

export default Crop;