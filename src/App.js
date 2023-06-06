import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './Store/Store';
import ErrorPage from './error-page';
import Form from './components/Form';
import TableData from './components/Tabledata';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/formdata" element={<TableData />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;