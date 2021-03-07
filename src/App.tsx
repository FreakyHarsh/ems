import React from "react";
import Employee from "./Employee/Employee";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import Admin from "./Admin/Admin";

function App() {
  return (
    <div>
      <Switch>
        <Route path='/employee'>
          <Employee />
        </Route>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
