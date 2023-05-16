import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FormData from './Formdata';
import './components/Form.css';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    password: ''
  });

  const [tableData, setTableData] = useState([]);

  const handleSubmit = function (event) {
    event.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({
      name: '',
      email: '',
      gender: '',
      password: ''
    });
  };

  const handleChange = function (event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <form onSubmit={handleSubmit} className="form-container">
            <div className="input-group mb-3">
              <label>Name:</label>
              <input
                className="form-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-group mb-3">
              <label>Email:</label>
              <input
                className="form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group mb-3">
              <label>Gender:</label>
              <select
                name="gender"
                className="form-input"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Other</option>
                <option value="male">Male</option>
                <option value="female">Female</option>~
              </select>
            </div>
            <div className="input-group mb-3">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                className="form-input"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </form>
          <Link to="/form-data">View Form Data</Link>
        </Route>
        <Route path="/form-data">
          <FormData data={tableData} />
          <Link to="/" className="btn-primary">Go Back</Link>
        </Route>
      </Switch>
    </Router>
  );
}