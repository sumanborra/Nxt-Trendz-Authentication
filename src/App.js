import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <div className="background-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
