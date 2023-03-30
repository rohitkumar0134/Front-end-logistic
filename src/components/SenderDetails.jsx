import { useState } from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


function SenderDetails() {

  return (
    <>
    <h3>Where are you sending to?</h3>
    <Form.Group className="mb-3 col-auto" controlId="formBasicPincode">
    <Form.Label>Pincode</Form.Label>
    <Form.Control type="pin" placeholder="Enter Pincode" />
  </Form.Group>

  <Form.Group className="mb-3 col-auto" controlId="formBasicstates">
    <Form.Label>states</Form.Label>
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  </Form.Group>

  <Form.Group className="mb-3 col-auto" controlId="formBasiccity">
    <Form.Label>City</Form.Label>
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  </Form.Group>


  <Form.Group className="mb-3 col-auto" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
  </Form.Group>

  <Form.Group className="mb-3 col-auto" controlId="formBasiccpName">
    <Form.Label>company Name</Form.Label>
    <Form.Control type="text" placeholder="Enter company Name" />
  </Form.Group>

  <Form.Group className="mb-3 col-auto" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>


  <Form.Group className="mb-3 col-auto" controlId="formBasicnumber">
    <Form.Label>Mobile number</Form.Label>
    <Form.Control type="number" placeholder="Enter Mobile number" />
  </Form.Group>


  <Form.Group className="mb-3 col-auto" controlId="formBasicnumber">
    <Form.Label>Alternate Number</Form.Label>
    <Form.Control type="number" placeholder="Enter Mobile number" />
  </Form.Group>

  <Form.Group className="mb-3 col-auto" controlId="formBasicnumber">
    <Form.Label>Adrress line 1</Form.Label>
    <Form.Control type="text" placeholder="Enter Adrress line 1" />
  </Form.Group>


  <Form.Group className="mb-3 col-auto" controlId="formBasicnumber">
    <Form.Label>Adrress line 2</Form.Label>
    <Form.Control type="text" placeholder="Enter Adrress line 2" />
  </Form.Group>


  </>
  )
}

export default SenderDetails
