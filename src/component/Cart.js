import React from 'react'
import {Table} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { changeage } from 'redux/store'
import {changeName ,increase,getid} from '../store/userSlice'

export const Cart = () => {

  let a = useSelector((state)=>{return state})
  let b = useSelector((state)=>state.list)
  let dispatch = useDispatch()

 

  return (
  
    <div>
      {a.user.name} {a.user.age}의 장바구니
      <button onClick={()=>{
        dispatch(changeage())
      }}>버튼</button>
      <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
  </thead>
       <tbody>
        {b.map((item,i)=>
         <tr ket={i}>
         <td>{b[i].id}</td>
         <td>{b[i].name}</td>
         <td>{b[i].count}</td>
         <td><button onClick={()=>{
         dispatch(changeage(b[i].id)) 
          
         }}>+</button></td>
       </tr>
               
        )}
      
    </tbody>

    

</Table> 
    </div>
  )
}
