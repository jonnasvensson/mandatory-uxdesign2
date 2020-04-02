import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Main from './components/Main'
import Quiz from './components/Quiz'
import About from './components/About'
import Stats from './components/Stats'



function App() {
  return (
    <Router>
      <div className="App">
        <Main />
        <Route exact path="/" component={Quiz} />
        <Route path="/about" component={About} />
        <Route path="/stats" component={Stats} />
      </div>
    </Router>
  );
}

export default App;
