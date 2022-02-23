import './App.css';
import Home from "./components/Home"
import Nav from "./components/nav"
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
          <Home />
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
