import React from 'react'
import { useSelector } from 'react-redux'
import img from '../asset/teams.png'
import "../App.css";
const Clients = () => {
  const {isopen}=useSelector((store)=>store.checkOpen)
  return (
    <div className='universal' style={isopen?{width:"85%"}:{width:"96%"}}>
      <img src={img} alt='' />
    </div>
  )
}

export default Clients