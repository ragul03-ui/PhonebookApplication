import React from "react";

import { Login } from "./login";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { Register } from "./register";


const App=()=> {
  

  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/Login" component={Login}></Route>
        <Route exact path="/Register" component={Register}></Route>
       
      
        </Switch>
    </div>
      </Router>
      
  );
}

export default App;