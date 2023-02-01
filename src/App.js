import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createContext, useState, } from 'react';
import data from './data'
import {Navbar, Container , Nav,Form,Button} from 'react-bootstrap';
import { Shose } from './component/Shose';
import { Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom'
import { ShoseDetail } from './page/ShoseDetail';
import { FiShoppingCart } from 'react-icons/fi';
import axios from 'axios'
import { Cart } from 'component/Cart';
import Slide from 'component/Slide';


// state 보관함임
export  let Context1 = createContext()

function App() {



  let [shoes,setShoes] =useState(data)
  let [재고]=useState([10,11,12])
  let [count,setCount] =useState(2)
  const navigate = useNavigate()
 
  
  
  return (
    <div className="App">
      <Navbar className='test_obj' bg="light" expand="lg">
      <Container fluid>
        <Link to="/" className='home'  href="#">NIKE SHOP</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to ="/" className='home' >Home</Link>
            <Link to ="detail" className='home' >상품목록</Link>
            <Link to ="cart" className='home'  ><FiShoppingCart/></Link>
           
         
         
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Go</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
       
        <Routes>
          <Route path="/" element={ 
       <>
      <Slide/>
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
       <div className='myButton_main'>
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
       </div>
       </>}/>
       <Route path='/detail/:id' element={<ShoseDetail shoes={shoes}/>}/>
       <Route path='/cart' element={<Cart/>}></Route>
      </Routes>

       
      
    </div>
  );
}

export default App;
