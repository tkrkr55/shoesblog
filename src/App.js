import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import data from './data'
import {Navbar, Container , Nav} from 'react-bootstrap';
import { Shose } from './component/Shose';
import {ShoseNav} from './component/ShoseNav'
import { Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom'
import { ShoseDetail } from './page/ShoseDetail';
import { About } from './component/About';

function App() {

  let [shoes,setShoes] =useState(data)
  const navigate = useNavigate()
  return (
    <div className="App">

     


       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{ navigate('/')}}>Shose Aat Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='home' onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link className='datail' onClick={()=>{ navigate('/detail')}}>Cart</Nav.Link>
        
          </Nav>
        </Container>
        </Navbar>
       
       
        <Routes>
          <Route path="/" element={ 
       <>
        <ShoseNav/>
       <div>
        <div class="container text-center">
        <div class="row">
          {shoes.map((item,i)=>{
           return( 
             <Shose shoes={shoes[i]} i={i}/>
          )})}
       
        </div>
        </div>
       </div>
       </>}/>
       <Route path='/detail/:id' element={<ShoseDetail shoes={shoes}/>}/>
      </Routes>

       
      
    </div>
  );
}

export default App;
