import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { close, open } from '../store/isOpen/isOpen.action'
import Calendar from './Calendar'
import Team from "../store/Team/Team"
import Clients from './Clients'
import Dashboard from './Dashboard'
import DashboardNav from './DashboardNav'
import Projects from '../store/Project/Project'
import Reports from './Reports'
import Setting from './Setting'
import SideBar from './Sidebar'
import Tags from './Tags'
import TimeTracker from './TimeTracker'

export const DashRoute = () => {
  const dispatch=useDispatch()
  const [isOpen, setIsOpen] = useState(true);
  
  const toggle = () =>{
    setIsOpen(!isOpen);
    dispatch(isOpen?close():open())

    
   // console.log(isOpen?"osdpifgiopjgvihd":"tueroiioertyiort")

  } 
  return (
    <div>
         <DashboardNav onOpen={toggle} />
         
       <div>
        <SideBar isOpen={isOpen}/>
        </div>
        <div  style={{background:'#f2f6f8', width:'100%', marginTop:'50px',height:'100vh'}}>
        <Routes>
            <Route path={'/timetracker'} element={<TimeTracker/>}/>
            <Route path={'/calender'} element={<Calendar/>}/>
            <Route path={'/clients'} element={<Clients/>}/>
            <Route path={'/dashboard'} element={<Dashboard/>}/>
            <Route path={'/projects'} element={<Projects/>}/>
            <Route path={'/reports'} element={<Reports/>}/>
            <Route path={'/settings'} element={<Setting/>}/>
            <Route path={'/teams'} element={<Team/>}/>
            <Route path={'/tags'} element={<Tags/>}/>

        </Routes>
        </div>
      
    </div>
  )
}
