import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Shose = ({shoes,i}) => {
  return (
          <div className="col-md-4">
           <img className='shoseimg' src={'/신발이미지/shoes'+(i)+'.jpg'}/>
           <h4>{shoes.title}</h4>
            <p>{shoes.content}</p>
            <p>{shoes.price}</p>
          </div>
      
  )
         

     }
       
      
         

        
      

