import Form from './components/Form';
import TableData from './components/Tabledata';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import React, { useState } from 'react';

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
      path: 'formdata',
      element: <TableData data={tableData} />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )

};

export default App;