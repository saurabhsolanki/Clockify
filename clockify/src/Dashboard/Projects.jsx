import React from 'react'
import img from '../asset/calendar.png'
import "../App.css";
import { useSelector } from 'react-redux';

const Projects = () => {
  const {isopen}=useSelector((store)=>store.checkOpen)
  return (
    <div className='universal' style={isopen?{width:"85%"}:{width:"96%"}}>
      <img src={img} alt='' />
    </div>
  )
}

export default Projects