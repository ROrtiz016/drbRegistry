import React from 'react';
import './App.css';
import Home from './component/Home/Home'
import Header from './component/Home/Header/Header'
import Registry from './component/Home/Registry/IntakeSheet'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/registry" component={Registry}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
