import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './routes/Dashboard'
import Login from './routes/Login'
import JokeDetails from './routes/JokeDetail'

// Criar a navegação entre os componentes a seguir, utilizar a lib react-router-dom

const App = () => {
  return (
    <Router>
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/joke-details">JokeDetail</Link>
            </li>
          </ul>
        </nav> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/joke-details" component={JokeDetails}/>
        </Switch>
      {/* </div> */}
    </Router>
  )
}

export default App
