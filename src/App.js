import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Formdata from './components/Formdata';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Navbar title="Detail Form" />
      <div className="container">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/formdata" element={<Formdata />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;