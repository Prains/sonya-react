import './App.scss'
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
