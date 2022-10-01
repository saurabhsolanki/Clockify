import React from "react";
import Activity from "./Features/Activity";
import Approval from "./Features/Approval";
import Apps from "./Features/Apps";
import Calender from "./Features/Calender";
import Dashboard from "./Features/Dashboard";
import Expenses from "./Features/Expenses";
import Feature from "./Features/Feature";
import Integration from "./Features/Integration";
import Kiosk from "./Features/Kiosk";
import Projects from "./Features/Projects";
import Reports from "./Features/Reports";
import Schedule from "./Features/Schedule";
import Timeoff from "./Features/Timeoff";
import TimeSheet from "./Features/TimeSheet";
import Ttrack from "./Features/Ttrack";
import Video from "./Features/Video";
import StartTrack from "./Home/StartTrack";
import Navbar from "./Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
const Features = () => {
  return (
    <>
      <Navbar />
      <Feature />
      <Ttrack />
      <TimeSheet />
      <Kiosk />
      <Calender />
      <Apps />
      <Integration />
      <Dashboard />
      <Reports />
      <Activity />
      <Projects />
      <Schedule />
      <Timeoff />
      <Approval />
      <Expenses />
      <Video />
      <StartTrack />
      <Footer />
    </>
  );
};

export default Features;
