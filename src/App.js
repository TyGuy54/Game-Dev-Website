import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/SigninInfo/SigninPage';
import AboutInfo from './pages/AboutPageInfo/AboutInfo';


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/about" component={AboutInfo} exact/>
      </Switch>
    </Router>
  );
}

export default App;
