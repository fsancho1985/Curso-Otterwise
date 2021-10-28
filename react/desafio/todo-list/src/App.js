import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import { ToastContainer } from 'react-toastify'

import Home from './components/Home'
import Form from './components/Form'
import EditForm from "./components/EditForm";

import './App.css';
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <Router>
      <ToastContainer/>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Form</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/editform/:id">
            <EditForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
