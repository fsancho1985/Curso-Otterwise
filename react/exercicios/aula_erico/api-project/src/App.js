import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './routes/Home'
import CommentsPost from './routes/CommentsPost'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/comments/:id' >
          <CommentsPost/>
        </Route>
      </Switch>
    </Router>
  )  
}

export default App