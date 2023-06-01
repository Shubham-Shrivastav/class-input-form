import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context/DataContext';

const Form = () => {
  const { addFormData, formData,
    setFormData } = useContext(DataContext);


  //created a function for handling the change 
  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addFormData(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input value={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
            required />
        </div>

        <div>
          <label>Email:</label>
          <input value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
            required />
        </div>

        <div>
          <label>Gender:</label>
          <select
            value={formData.gender}
            onChange={handleChange}
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
          <input value={formData.password}
            onChange={handleChange}
            type="password" name="password" required />
        </div>

        <button type="submit">Submit</button>
      </form>
      <Link to="/formdata">View Form Data</Link>
    </div>
  );
};

export default Form;