import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FormData from './Formdata';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        gender: '',
        password: ''
      },
      tableData: []
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { formData, tableData } = this.state;
    this.setState({
      tableData: [...tableData, formData],
      formData: {
        name: '',
        email: '',
        gender: '',
        password: ''
      }
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }

  render() {
    const { formData, tableData } = this.state;

    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <form onSubmit={event => this.handleSubmit(event)}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={event => this.handleChange(event)}
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={event => this.handleChange(event)}
                />
              </div>
              <div>
                <label>Gender:</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={event => this.handleChange(event)}
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
                  onChange={event => this.handleChange(event)}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
            <Link
              to={{
                pathname: "/formdata",
                state: { tableData }
              }}
            >
              View Form Data
            </Link>
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