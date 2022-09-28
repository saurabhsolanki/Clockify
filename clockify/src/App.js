<<<<<<< HEAD
import { Box } from '@chakra-ui/react';
=======
import { Route, Routes } from 'react-router-dom';
>>>>>>> 969ebaebabb8c752d0564a72707605b67a47175a
import './App.css';

import Navbar from './Component/Navbar/Navbar';
import Features from './Component/Features';
import DownLoad from './Component/DownLoad';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Footer from './Component/Footer/Footer'
import Sidebar from './Dashboard/Sidebar';
function App() {
  return (
<<<<<<< HEAD
    <div className="App" >
    
      <Navbar />
        <AllRoutes />
    
=======
    <div className="App">
     
      
      <Routes>
        <Route path='/features' element={<Features/>} />
        <Route path='/download' element={<DownLoad/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/traker' element= {<Sidebar/>} />
        
      </Routes>
      <Footer />
>>>>>>> 969ebaebabb8c752d0564a72707605b67a47175a
    </div>
  );
}

export default App;