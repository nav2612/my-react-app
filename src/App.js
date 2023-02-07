import React from 'react';
// import Login from './login';
import Mainpage from './main.js';
import Navbar from './navbar.js';
import Login_realtor from './login_realtor.js';
import Login_customer from './login_customer.js';
import Openhouse from './openhouse.js';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
  
function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Mainpage/>} />
          <Route path='/Login-realtor' element={<Login_realtor/>} />
          <Route path='/Login-customer' element={<Login_customer/>} />
          <Route path='/openhouse' element={<Openhouse/>} />
        </Routes>
      </Router>
    
  </>
  );
}
  
export default App;