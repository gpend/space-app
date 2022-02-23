import './App.css';
import Nav from "./components/nav"
import Home from "./components/Home"
import Destination from './components/Destination';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={
          <Home />
        } />
        <Route path='/destination' element={
          <Destination />
        } />
        <Route path='/crew' element={
          <Home />
        } />
        <Route path='/technology' element={
          <Home />
        } />
      </Routes>
      
    </div>
  );
}

export default App;
