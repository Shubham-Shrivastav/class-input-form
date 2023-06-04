import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFormData } from '../store/rootReducer';

const Form = ({ handleSubmit, addFormData }) => {
  const onSubmit = (data) => {
    addFormData(data);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <Field
            name="name"
            component="input"
            type="text"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Field
            name="email"
            component="input"
            type="email"
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <Field
            name="gender"
            component="select"
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Field
            name="password"
            component="input"
            type="password"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Link to="/formdata">Go to TableData</Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  addFormData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'myForm' })(Form));
