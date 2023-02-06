import React from 'react';
// import Login from './login';
import Mainpage from './main.js';
import Navbar from './navbar.js';
import Login from './login.js';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
  
function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Mainpage/>} />
          <Route path='/Login' element={<Login/>} />
        </Routes>
      </Router>
    
  </>
  );
}
  
export default App;