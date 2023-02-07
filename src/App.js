import React from 'react';
import Mainpage from './main.js';
import Navbar from './navbar.js';
import Login_realtor from './login_realtor.js';
import Openhouse from './openhouse.js';
import Signup_realtor from './signup_realtor.js';
import Forgot_password from './forgot_password.js';

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
  
function App() {
  return (
    <React.Fragment>
    <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Mainpage/>} />
          <Route path='/Login-realtor' element={<Login_realtor/>} />
          {/* <Route path='/Login-customer' element={<Login_customer/>} /> */}
          <Route path='/openhouse' element={<Openhouse/>} />
          <Route path='/signup_realtor' element={<Signup_realtor/>} />
          <Route path='/forgot_password' element={<Forgot_password/>} />
        </Routes>
      </Router>
    
  </React.Fragment>
  );
}
  
export default App;