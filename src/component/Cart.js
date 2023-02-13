import React from 'react'
import {Table} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { changeage,deletItem } from 'redux/store'
import {changeName ,increase,getid} from '../store/userSlice'
import { FiPlus,FiTrash2 } from 'react-icons/fi';

function Child(){
  return 
}

export const Cart = () => {

  let a = useSelector((state)=>{return state})
  let b = useSelector((state)=>state.list)
  let dispatch = useDispatch()

 

  return (
    
    <div>
     <Child></Child>
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
         <td><button className='myButton ' onClick={()=>{
         dispatch(changeage(b[i].id)) 
          
         }}><FiPlus/></button>
         <button className='myButton '
         onClick={()=>{
          dispatch(deletItem(b[i].id))
         }}
         ><FiTrash2/></button>
         </td>
       </tr>
               
        )}
      
    </tbody>

    

</Table> 
    </div>
  )
}
