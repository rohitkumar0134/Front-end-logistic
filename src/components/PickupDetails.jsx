
function PickupDeatils({address}) {
  return (
    <>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <a href="#" className="btn btn-primary me-md-2">Add Address</a>
</div>
<div className="card mb-3" style={{"maxWidth": "540px"}}>

  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://img.icons8.com/ios/150/null/home-page.png" className="img-fluid rounded-start" alt="..."/>
      
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{address.company_name}</h5>
        <p className="card-text">{address.address1} {address.address2} {address.city_name} {address.state_name} {address.pincode}</p>
        <a href="#" className="btn btn-primary me-md-2">change address</a>
      </div>
    </div>
  </div>
</div>
<a href="#" className="btn btn-primary me-md-2">Create order</a>

    </>
    )
  }
  
  export default PickupDeatils
  