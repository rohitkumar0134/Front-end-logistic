import { useState,useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import axios from "axios";
import '../App.css'
import Orderdetails from '../components/Orderdetails';
import SendingAddr from '../components/SenderDetails';
import '../App.css'
import Parcelsize from '../components/Parcelsize';
import PickupDeatils from '../components/PickupDetails';

function CreateOder() {
  const [address, SetAddress] = useState({});
  
  useEffect(() => {
    const createorder = async () => {
      const post = { data:    {
        warehouse_id : "35529",
        access_token : "adcc1a1e9c3e109e5577acaeec72c7d5",
        secret_key : "a3461a79d540b6decb3b964ccda25389"
        } }
    try {
      const res = await axios.post('https://my.ithinklogistics.com/api_v3/warehouse/get.json', post)
      SetAddress(res.data.data[0])
    } catch (e) {
      alert(e)
    }
  }
  createorder();

  }, []);

  console.log(address)

  
    return (
<>
<div className="container" style={{"marginTop":"30px","marginLeft":"20px"}}>
<form>
  <div className='row mb-3'>
  <div className='row g-3 border border-5 rounded bg-light'><SendingAddr/></div>
  <div className='row g-3 border border-5 rounded bg-light'> <Orderdetails/></div>
  <div className='row g-3 border border-5 rounded bg-light'><Parcelsize/></div>
  <div className='row g-3 border border-5 rounded bg-light'><PickupDeatils address={address}/></div>
  
  </div>

</form>
</div>
</>
    )
  }
  
  export default CreateOder
  