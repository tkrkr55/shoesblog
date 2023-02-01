import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export const Shose = ({shoes,i}) => {

  const navigate = useNavigate()
  const  showDetail=()=>{
    navigate(`/detail/${i}`)
  }
  return (
    <>
    
          <div className="col-md-4"
          onClick={showDetail}>
           <img className='shoseimg' src={'/신발이미지/shoes'+(i)+'.jpg'}/>
           <h4>{shoes.title}</h4>
            <p>{shoes.content}</p>
            <p>{shoes.price}</p>
          </div>
          </>
  )
         

     }
       
      
         

        
      

