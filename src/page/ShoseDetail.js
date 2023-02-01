import React, { useEffect,useState,useContext } from 'react'
import {useParams} from 'react-router-dom'
import style from 'styled-components'
import {Container, Nav,Row,Col} from 'react-bootstrap'
import {addItem} from '../redux/store.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const ShoseDetail = ({shoes}) => {

 let navigate = useNavigate()
  let [경고,경고변경] =useState('')
  let [알럿트,알럿트변경] =useState(true)
  let [탭,탭변경] =useState(0)
  let [fade2,setFade2] = useState('')
  let dispatch = useDispatch()

 useEffect(()=>{
  setTimeout(()=>{
    알럿트변경(false)
  },2000)
 },[])

  useEffect(()=>{
  
    if(isNaN(경고) == true){
      alert("숫자만 입력해 주세요")
    }
     
  
  },[경고])


useEffect(()=>{
 setTimeout(()=>{
  setFade2('end')
 },100)

 return ()=>{
  setFade2('')
 }
},[])


  
  let {id} = useParams()
  let 찾은상품 =shoes.find((data)=>{return data.id == id})
  
  return (
    <div className={`start ${fade2}`}>
    <div className="container">
    
    {
      알럿트 == true?
      <div className='my-alert2'>지금 구매시 20% 할인</div> : null
    }
    
  
    
    <Container className='Detial_wrap'>
      <Row>
        <Col>
        <div className="row shose_img">
        <img src={"/신발이미지/shoes"+(id)+".jpg"} width="100%" />
    <p className='detail_text'><span>{id}명이</span>이 상품을 보는중에요 👀</p>
    </div>
        </Col>
        <Col>
        <div className="col-md-6">
      <p className="pt-5 Detail_title">{찾은상품.title}</p>
      
      <p><strong>10% </strong>{찾은상품.price}원</p>
      <button className="btn btn-danger"
      
      onClick={()=>{
        
        dispatch(addItem({id :찾은상품.id, name : 찾은상품.title, count : 1}))
        navigate('/cart')
      }}
      
      >주문하기</button> 
      <div className='pd-x-text-layout'>
        <div className='x-text-upper'>
          <p className='x-text'>
            <span className='x-text-icon'>ㄴ</span>
            <span> 구매 후기 작성 시 </span>
            <span><strong>1.0%</strong>"적립"</span>
          </p>
          <p className='x-text'> + 20원</p>
        </div>
        <div className='x-text-upper'>
          <p className='x-text'>
            <span className='x-text-icon'>ㄴ</span>
            <span> 구매 확정시</span>
            <span><strong>0.5%</strong>"적립"</span>
          </p>
          <p className='x-text'> + 10원</p>
        </div>
      </div>
    </div>
      </Col>
      </Row>
      </Container>
     
    

  <Nav fill variant="tabs" defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link onClick={()=>{
          탭변경(0)
        }} eventKey="link0">버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{
          탭변경(1)
        }} eventKey="link1">버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{
          탭변경(2)
        }}  eventKey="link2">버튼2</Nav.Link>
      </Nav.Item>
    
    </Nav>
    <TabContent 탭={탭} shoes={shoes}/>
    
   
  
</div> 
</div>
  )  
}
function TabContent({탭}){
  
  let [fade,setfade]=useState('')
  useEffect(()=>{
    setTimeout(()=>{
      setfade('end')
    },100)
    return()=>{
      setfade("")
    }
    
    
   
  },[탭])
return(<div className={`start ${fade}`}>
  {[<div>내용1</div>,<div>내용1</div>,<div>내용2</div>][탭]}
</div>)

}