import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'
 
function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo</Link>
      </div>
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
          
          <Route exact path="/company">
            <Company />
          </Route>

          <Route exact path="/newproject">
            <NewProject />
          </Route>
        </Container>
      </Switch>
      <p>Footer</p>
    </Router> 
  );
}

export default App;
