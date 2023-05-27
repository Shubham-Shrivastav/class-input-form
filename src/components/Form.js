import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context/DataContext';

const Form = () => {
  const { addFormData } = useContext(DataContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      gender: event.target.gender.value,
      password: event.target.password.value
    };

    addFormData(formData);

    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" required>
            <option value="">Other</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Link to="/formdata">View Form Data</Link>
    </div>
  );
};

export default Form;