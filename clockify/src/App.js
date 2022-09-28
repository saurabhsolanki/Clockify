import './App.css';
import Navbar from './Component/Navbar'
import TimeTracker from './Dashboard/TimeTracker';
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes/>
      <TimeTracker/>
    </div>
  );
}

export default App;