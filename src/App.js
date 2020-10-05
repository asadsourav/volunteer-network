import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import EventTasks from './Components/EventTasks/EventTasks';
import RegisterList from './Components/RegisterList/RegisterList';
import AddEvent from './Components/AddEvent/AddEvent';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const  UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <div>
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>

      <Router>
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/home">
                <Home/>
                
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/> 
            </Route>
            <Route path="/eventTasks">
              <EventTasks/> 
            </Route>
            <Route path="/registerList">
              <RegisterList></RegisterList>
            </Route>
            <Route path="/addEvent">
              <AddEvent></AddEvent>
            </Route>
            <PrivateRoute path="/activity/:title">
              <Register></Register>
            </PrivateRoute>
          </Switch>
      </Router>
      </UserContext.Provider>

    </div>
  );
}

export default App;
