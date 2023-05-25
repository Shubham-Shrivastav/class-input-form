import { Link } from 'react-router-dom';
import { DataContext } from '../Context/DataContext';
import { useContext } from 'react';

const Form = () => {
  const { tableData, setFormData, formData, setTableData } = useContext(DataContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTableData([...tableData, formData])
    setFormData({
      name: '',
      email: '',
      gender: '',
      password: ''
    });
  };

  const handleChange = (event) => {
    // console.log(formData)
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div>
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
    </div>
  );
};

export default Form;