import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";

import RegisterLoginPage from './pages/RegisterLoginPage';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavigationBar'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        <Switch>
          
          <Route path='/dashboard'>
            <Dashboard/>
          </Route>

          <Route path='/'>
            <RegisterLoginPage/>
          </Route>
        </Switch>
      </div>

      {/* <ActivitySection/> */}
    </div>
  );
}

export default App;
