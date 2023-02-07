import React from 'react';
// import Login from './login';
import Mainpage from './main.js';
import Navbar from './navbar.js';
<<<<<<< HEAD
import Login_realtor from './login_realtor.js';
import Login_customer from './login_customer.js';
import Openhouse from './openhouse.js';
=======
import Login from './login.js';
import Customer_login from './Customer_login.js';
>>>>>>> 55194b1 (07-02-2023 Customer,Realtor SignUp forms)
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
  
function App() {
  return (
    <React.Fragment>
    <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Mainpage/>} />
<<<<<<< HEAD
          <Route path='/Login-realtor' element={<Login_realtor/>} />
          <Route path='/Login-customer' element={<Login_customer/>} />
          <Route path='/openhouse' element={<Openhouse/>} />
=======
          <Route path='/Login' element={<Login/>} />
          <Route path='/Customer_login' element={<Customer_login/>} />
>>>>>>> 55194b1 (07-02-2023 Customer,Realtor SignUp forms)
        </Routes>
      </Router>
    
  </React.Fragment>
  );
}
  
export default App;