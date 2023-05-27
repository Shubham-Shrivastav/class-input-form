import Form from './components/Form';
import TableData from './components/Tabledata';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import React, { useState } from 'react';
import { DataProvider } from './Context/DataContext';


const App = () => {
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    password: ''
  });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Form
        tableData={tableData}
        setFormData={setFormData}
        formData={formData}
        setTableData={setTableData}
      />,
      errorElement: <ErrorPage />
    },

    // submitting the data to the page called tabledata
    {
      path: '/formdata',
      element: <TableData />
    }
  ]);

  return (
    <>
      {/* removed the props to the routs element and added the value in DataProvider */}
      <DataProvider value={{ tableData, setTableData, formData, setFormData }}>
        <RouterProvider router={router} />
      </DataProvider>
    </>
  )

};

export default App;
