import React from 'react'
import { useSelector } from 'react-redux'
import img from '../asset/dashboard.png'
import "../App.css";

const Dashboard = () => {
  const {isopen}=useSelector((store)=>store.checkOpen)
  return (
    <div className='universal' style={isopen?{width:"85%"}:{width:"96%"}}>
      <img src={img} alt='' />
    </div>
  )
}

export default Dashboard