import React, { useEffect,useState,useContext } from 'react'
import {useParams} from 'react-router-dom'
import style from 'styled-components'
import {Nav,} from 'react-bootstrap'


export const ShoseDetail = ({shoes}) => {


  let [경고,경고변경] =useState('')
  let [알럿트,알럿트변경] =useState(true)
  let [탭,탭변경] =useState(0)
  let [fade2,setFade2] = useState('')

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
      <div className='my-alert2'>2초이내 구매시 할인</div> : null
    }
    
  
    <div className="row">
    <div className="col-md-6">
      <img src={"/신발이미지/shoes"+(id)+".jpg"} width="100%" />
    </div>
    <div className="col-md-6">
     <input onChange={(e)=>{경고변경(e.target.value)}}></input>
      <h4 className="pt-5">{찾은상품.title}</h4>
      <p>{찾은상품.content}</p>
      <p>{찾은상품.price}원</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
  <Nav fill variant="tabs" defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link onClick={()=>{
          탭변경(0)
        }} eventKey="link0">버튼0</Nav.Link>
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