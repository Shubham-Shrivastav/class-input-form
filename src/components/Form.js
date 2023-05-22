import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import FormData from './Formdata';

class Form extends Component {
  state = {
    formData: {
      name: '',
      email: '',
      gender: '',
      password: ''
    },
    tableData: []
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { formData, tableData } = this.state;
    this.setState((prevState) => ({
      tableData: [...tableData, formData],
      formData: {
        name: '',
        email: '',
        gender: '',
        password: ''
      }
    }));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

  render() {
    const { formData, tableData } = this.state;

    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Gender:</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
  }
}

export default Form;