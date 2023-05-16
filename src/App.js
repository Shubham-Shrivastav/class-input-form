import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Form from './components/Form';
import Navbar from './components/Navbar';
import Formdata from './components/Formdata';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar title="Detail Form" />
        <div className="container">
          <Route exact path="/" component={Form} />
        </div>
        <Route path="/formdata" component={Formdata} />
      </Router>
    );
  }
}
export default App;
