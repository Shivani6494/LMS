import React, { useState } from 'react';
import Login from './container/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Admin from './container/Admin/Admin'

function App() {
   const [isAuthenticated, setIsAuthenticated] = useState (false)
  return (
    <div>
      {
        isAuthenticated ? <Admin setIsAuthenticated = {setIsAuthenticated}/> : <Login setIsAuthenticated = {setIsAuthenticated}/> 
      }
    </div>
  );
}

export default App;
