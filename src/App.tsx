import { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Projects } from 'pages'

export const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </Switch>
  </Router>
)
