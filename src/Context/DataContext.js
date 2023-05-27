import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [tableData, setTableData] = useState([]);
    
    // make a function to add directly to the table array
    // formData object pass as an argument to the function
  
  const addFormData = (formData) => {
    setTableData([...tableData, formData]);
  };

  const dataContextValue = {
    tableData,
    addFormData
  };

  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };