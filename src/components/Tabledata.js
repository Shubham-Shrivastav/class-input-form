import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context/DataContext';

const TableData = () => {
  const { tableData } = useContext(DataContext);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length ? (
            tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.password}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No records found</td>
            </tr>
          )}
        </tbody>
      </table>
      <Link to="/">Go Back</Link>
    </>
  );
};

export default TableData;