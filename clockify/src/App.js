import { Box } from '@chakra-ui/react';
import './App.css';
import Navbar from './Component/Navbar'
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <div className="App" >
    
      <Navbar />
        <AllRoutes />
    
    </div>
  );
}

export default App;
