import Form from 'react-bootstrap/Form';

function Orderdetails() {
  return (
    <>
    <Form.Group className="mb-3 col-auto" controlId="formBasicPincode">
    <Form.Label>Order id</Form.Label>
    <Form.Control type="text" placeholder="Enter order id" />
  </Form.Group>

  <Form.Group className="mb-3 col-auto" controlId="formBasicPincode">
    <Form.Label>Sub order id</Form.Label>
    <Form.Control type="text" placeholder="Enter Pincode" />
  </Form.Group>

  <Form.Group className="mb-3 col-auto" controlId="formBasicPincode">
    <Form.Label>Order date</Form.Label>
    <Form.Control type="date" placeholder="Enter Pincode" />
  </Form.Group>

  <Form.Group className="mb-3 col-auto" controlId="formBasiccity">
    <Form.Label>Pickup type</Form.Label>
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  </Form.Group>
    </>
  );
}

export default Orderdetails;