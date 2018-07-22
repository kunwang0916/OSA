import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Login from './components/Login';
import CourseDetail from './components/CourseDetail';
import CourseList from './components/CourseList';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/courseList" component={CourseList} />
              <Route path="/courseDetail" component={CourseDetail} />
            </Switch>
        </Router>
      </div>
      
    );
  }
}

export default App;
