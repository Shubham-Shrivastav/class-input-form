import React from 'react';
import { connect } from 'react-redux';
import { addFormData } from '../store/action';

const Form = ({ formData, addFormData }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addFormData(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            value={formData.name}
            onChange={(e) => updateFormData('name', e.target.value)}
            type="text"
            name="name"
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            type="email"
            name="email"
            required
          />
        </div>

        <div>
          <label>Gender:</label>
          <select
            value={formData.gender}
            onChange={(e) => updateFormData('gender', e.target.value)}
            name="gender"
            required
          >
            <option value="">Other</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label>Password:</label>
          <input
            value={formData.password}
            onChange={(e) => updateFormData('password', e.target.value)}
            type="password"
            name="password"
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  formData: state.form
});

const mapDispatchToProps = {
  addFormData
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
