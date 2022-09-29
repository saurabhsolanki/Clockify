import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SideBar from './Sidebar'
import TimeTracker from './TimeTracker'

export const DashRoute = () => {
  return (
    <div>
        <SideBar/>
        <Routes>
            <Route path={'/timetracker'} element={<TimeTracker/>}/>
        </Routes>
    </div>
  )
}
