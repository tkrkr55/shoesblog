import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createContext, useState, } from 'react';
import data from './data'
import {Navbar, Container , Nav} from 'react-bootstrap';
import { Shose } from './component/Shose';
import {ShoseNav} from './component/ShoseNav'
import { Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom'
import { ShoseDetail } from './page/ShoseDetail';
import { About } from './component/About';
import axios from 'axios'
import { Cart } from 'component/Cart';


// state 보관함임
export  let Context1 = createContext()

function App() {



  let [shoes,setShoes] =useState(data)
  let [재고]=useState([10,11,12])
  let [count,setCount] =useState(2)
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
       <button className='myButton' onClick={()=>{
          
          axios.get(`https://codingapple1.github.io/shop/data${count}.json`)
          .then((목록)=>{
              let copy = [...shoes, ...목록.data]
              setShoes(copy)
              setCount(count+1)
          })
            .catch(()=>{
              console.log("실패할경우")
            })
          
            

    
           
       }}>더보기</button>
       
       </>}/>
       <Route path='/detail/:id' element={<ShoseDetail shoes={shoes}/>}/>
       <Route path='/cart' element={<Cart/>}></Route>
      </Routes>

       
      
    </div>
  );
}

export default App;
