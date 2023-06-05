import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ErrorPage from './error-page';
import Form from './components/Form';
import TableData from './components/Tabledata';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Form />,
      errorElement: <ErrorPage />
    },
    {
      path: '/formdata',
      element: <TableData />
    }
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;