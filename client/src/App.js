import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Portfolio from './Portfolio'
import FindMyCarSupportPage from './FindMyCarSupportPage'
function App() {
  return (
    <div className="wrapper">
        <Routes>
          <Route path='/' element={<Portfolio/>} />
          <Route path='/FindMyCarSupportPage' element={<FindMyCarSupportPage/>} />
        </Routes>
    </div>
  );
}

export default App;