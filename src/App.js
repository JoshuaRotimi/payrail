import React from 'react';
import './App.css';
import Home from "./pages";
import SignIn from "./pages/signin";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
       <Switch>
           <Route path={'/'} component={Home} exact/>
           <Route path={'/signin'} component={SignIn}/>
       </Switch>
    </Router>
  );
}

export default App;
