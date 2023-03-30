import Form from 'react-bootstrap/Form';

function Parcelsize() {
  return (
    <>
    <Form.Group className="mb-3 col-auto" controlId="formBasicPincode">
    <Form.Label>Length (cms)</Form.Label>
    <Form.Control type="text" placeholder="Enter order id" />
  </Form.Group>

  <Form.Group className="mb-3 col-auto" controlId="formBasicPincode">
    <Form.Label>width (cms)</Form.Label>
    <Form.Control type="text" placeholder="Enter order id" />
  </Form.Group>

  <Form.Group className="mb-3 col-auto" controlId="formBasicPincode">
    <Form.Label>height (cms)</Form.Label>
    <Form.Control type="text" placeholder="Enter order id" />
  </Form.Group>

  <Form.Group className="mb-3 col-auto" controlId="formBasicPincode">
    <Form.Label>Physical weight (kg)</Form.Label>
    <Form.Control type="text" placeholder="Enter order id" />
    <Form.Text className="text-muted">
         Volumetric Wt
        </Form.Text>
  </Form.Group>

  </>
  );
}

export default Parcelsize;