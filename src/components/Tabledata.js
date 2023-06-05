import React from 'react';
import { connect } from 'react-redux';

const TableData = ({ tableData }) => {
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
    </>
  );
};

const mapStateToProps = (state) => ({
  tableData: state.tableData
});

export default connect(mapStateToProps)(TableData);