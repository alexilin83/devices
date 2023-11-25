import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import theme from '../src/theme';
import Layout from './common/components/Layout';
import ErrorPage from './routes/Error';
import HomePage, { action as createDeviceAction } from './routes/Home';
import SettingsPage from './routes/Settings';
import { getDevices } from './common/actions';
import 'antd/dist/reset.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: getDevices,
        action: createDeviceAction,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
)
