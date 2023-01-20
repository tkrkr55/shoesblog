import React from 'react'
import {useParams} from 'react-router-dom'
import style from 'styled-components'

let YellowBtn =  style.button`
  background : ${props=>props.bg};
  color: black;
  padding: 10px;
`



export const ShoseDetail = ({shoes}) => {
  
  let {id} = useParams()
  let 찾은상품 =shoes.find((data)=>{return data.id == id})
  
  return (
    <div className="container">
    
     <YellowBtn bg="blue">버튼 </YellowBtn>
     <YellowBtn bg="white">버튼 </YellowBtn>
 
    <div className="row">
    <div className="col-md-6">
      <img src={"/신발이미지/shoes"+(id)+".jpg"} width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{찾은상품.title}</h4>
      <p>{찾은상품.content}</p>
      <p>{찾은상품.price}원</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
  )
}
