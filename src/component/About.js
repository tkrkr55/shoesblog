import React from 'react'
import {Outlet} from 'react-router-dom'
export const About = () => {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}
