
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'

function App() {


  return (
    <>
      <div id='app-outer'>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>

      </div>
    </>
  )
}

export default App
