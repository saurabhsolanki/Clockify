import React from 'react'
import CustomerSupport from './Home/CustomerSupport'
import Free from './Home/Free'
import Management from './Home/Management'
import MobileView from './Home/MobileView'
import ProjectImg from './Home/ProjectImg'
import Reporting from './Home/Reporting'
import StartTrack from './Home/StartTrack'
import Time from './Home/Time'
import TimeManage from './Home/TimeManage'
import TimeTracking from './Home/TimeTracking'
import WhyTrack from './Home/WhyTrack'
import Navbar from './Navbar/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div>
        <Time />
        <ProjectImg/>
        <TimeManage/>
        <Reporting/>
        <Management/>
        <TimeTracking/>
        <MobileView/>
        <WhyTrack />
        <Free/>
        <CustomerSupport/>
        <StartTrack/>
    </div>
    </>
  )
}

export default Home