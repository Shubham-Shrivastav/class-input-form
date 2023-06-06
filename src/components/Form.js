import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { addFormData, updateFormData } from '../Store/action';
import { Link } from 'react-router-dom';

const Form = ({ formData, addFormData, updateFormData }) => {
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      addFormData(formData, () => {
        updateFormData({
          name: '',
          email: '',
          gender: '',
          password: ''
        });
      });
    },
    [addFormData, formData, updateFormData]
  );

  const handleInputChange = useCallback((name, value) => {
    updateFormData({ name, value });
  }, [updateFormData]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            type="text"
            name="name"
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            type="email"
            name="email"
            required
          />
        </div>

        <div>
          <label>Gender:</label>
          <select
            value={formData.gender}
            onChange={(e) => handleInputChange('gender', e.target.value)}
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
            onChange={(e) => handleInputChange('password', e.target.value)}
            type="password"
            name="password"
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <Link to="/formdata">Go to TableData</Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  formData: state.form
});

const mapDispatchToProps = {
  addFormData,
  updateFormData
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
