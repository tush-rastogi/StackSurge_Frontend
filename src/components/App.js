import React from 'react';
import './App.css';
import Login from './Login';
import Stack  from './Stack';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import {BrowserRouter as Router , Routes,Route } from 'react-router-dom';  
function App() {
  return (
         <div>
             
             <Router>
              <Routes>
              <Route path="/" exact element={<Login />} />
               <Route path="/stack" exact element={<Stack />}/>
               </Routes>
               </Router>
      
         </div>
      
  );
}

export default App;
