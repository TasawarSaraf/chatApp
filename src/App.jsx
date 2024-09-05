import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

import './App.css'

function App() {

  return (
    <div className='App'>
       <Router>
        <Routes>
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/register" element={<Register/>}/>
           {/**Login should be the first route */}
          <Route path="/" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
     
  )
}

export default App
