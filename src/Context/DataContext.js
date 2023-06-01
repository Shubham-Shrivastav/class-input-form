import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    password: ''
  });

  // make a function to add directly to the table array
  // formData object pass as an argument to the function

  const addFormData = (formData) => {
    setTableData([...tableData, formData]);
  };

  const dataContextValue = {
    tableData,
    addFormData,
    formData,
    setFormData
  };

  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };