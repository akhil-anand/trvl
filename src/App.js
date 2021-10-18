import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/home';
import Services from './components/pages/services';
import Products from './components/pages/products';
import SignUp from './components/pages/signup';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='trvl/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
  
        </Switch>
      </Router>
    </>

  );
}

export default App;
