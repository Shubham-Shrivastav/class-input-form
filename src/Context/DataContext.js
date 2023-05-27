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

    return (
        <DataContext.Provider value={{ tableData, setTableData, formData, setFormData }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
