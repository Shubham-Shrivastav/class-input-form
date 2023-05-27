import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Form from './components/Form';
import TableData from './components/Tabledata';
import { DataProvider } from './Context/DataContext';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Form />,
      errorElement: <ErrorPage />
    },

    // submitting the data to the page called tabledata
    {
      path: '/formdata',
      element: <TableData />
    }
  ]);

  return (
    <DataProvider>
      {/* removed the props to the routs element and also the value in DataProvider */}
      <RouterProvider router={router} />
    </DataProvider>
  );
};

export default App;
