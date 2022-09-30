import React from 'react'
import setting from '../asset/setting.png'
import "../App.css";
import { useSelector } from 'react-redux';
const Setting = () => {
  const {isopen}=useSelector((store)=>store.checkOpen)
  return (
    <div className='universal' style={isopen?{width:"85%"}:{width:"96%"}}>
        <img src={setting} style={{width:'100%'}} alt='setting'/>
    </div>
  )
}

export default Setting