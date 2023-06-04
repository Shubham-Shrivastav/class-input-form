import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorPage from './error-page';
import Form from './components/Form';
import TableData from './components/TableData';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/formdata" component={TableData} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;
