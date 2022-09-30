import { Route, Routes } from "react-router-dom";
import "./App.css";

import Features from "./Component/Features";
import DownLoad from "./Component/DownLoad";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import { DashRoute } from "./Dashboard/DashRoute";
import Home from "./Component/Home";
import Require from "./Component/RequireRoute/Require";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/features" element={
          <Require>
            <Features />
            </Require>
        } />
        <Route path="/download" element={<DownLoad/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboardpanel/*" element={<DashRoute />} />
      </Routes>

      {/* <Footer /> */}
      {/* <TimeTracker/> */}
    </div>
  );
}

export default App;
