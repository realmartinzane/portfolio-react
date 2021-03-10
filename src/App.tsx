import { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Projects } from 'pages'
import 'styles/index.css'
import { MainLayout } from 'layouts/main/main'

export const App: FC = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
)
