import './App.css';
import Home from "./components/Home"
import Destination from './components/Destination';
import Crew from './components/Crew'
import Technology from './components/Technology';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={
          <Home />
        } />
        <Route path='/destination/*' element={
          <Destination />
        } />
        <Route path='/crew/*' element={
          <Crew />
        } />
        <Route path='/technology/*' element={
          <Technology />
        } />
      </Routes>
      
    </div>
  );
}

export default App;
