import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar'
import Sidebar from './Dashboard/Sidebar';
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;