import React from "react";
import Navbar from "./Navbar/Navbar";
import Tracs from './Download/Tracs'
import Browser from "./Download/Browser";
import Desktop from "./Download/Desktop";
import Mobile from "./Download/Mobile";
import Kios from "./Download/Kios";
import Chat from "./Download/Chat";
import StartTrack from "./Home/StartTrack";
import Footer from '../Component/Footer/Footer'

const DownLoad = () => {
  return (
    <>
      <Navbar />
      <Tracs/>
      <Browser/>
      <Desktop/>
      <Mobile/>
      <Kios/>
      <Chat/>
      <StartTrack/>
    <Footer />
    </>
  );
};

export default DownLoad;
