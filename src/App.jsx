import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateOder from './pages/CreateOder'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {
  const [count, setCount] = useState(0)

  return (
<CreateOder/>
  )
}

export default App
