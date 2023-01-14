import './App.scss'
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import { useState } from 'react';
import Service from './components/Projects/Service/Service';

function App() {
  const [burgerShown, setBurgerShown] = useState(false)

  return (
    <Router>
      <div className="App">
        <Header burgerShown={burgerShown} setBurgerShown={setBurgerShown} />
        {burgerShown === false && <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/service'>
            <Service />
          </Route>
        </Switch>}
      </div>
    </Router>
  );
}

export default App;
