import React from 'react'
import img from '../asset/reports.png'
import "../App.css";
import { useSelector } from 'react-redux';
const Reports = () => {
  const {isopen}=useSelector((store)=>store.checkOpen)
  return (
    <div className='universal' style={isopen?{width:"85%"}:{width:"96%"}}>
      <img src={img} alt='' />
    </div>
  )
}

export default Reports