import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import FormData from './Formdata';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    password: ''
  });
  const [tableData, setTableData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTableData((prevTableData) => [...prevTableData, formData]);
    setFormData({
      name: '',
      email: '',
      gender: '',
      password: ''
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Other</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <Link to="/formdata">View Form Data</Link>
        </Route>
        <Route path="/formdata">
          <FormData data={tableData} />
          <Link to="/">Go Back</Link>
        </Route>
      </Switch>
    </Router>
  );
};

export default Form;
