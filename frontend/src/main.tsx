import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import theme, { validateMessages } from "../src/theme";
import Layout from "./common/components/Layout";
import ErrorPage from "./routes/Error";
import HomePage, { action as createDeviceAction } from "./routes/Home";
import DeviceDashboard, { loader as deviceLoader } from "./routes/Home/components/DeviceDashboard";
import SettingsPage from "./routes/Settings";
import { getDevices } from "./common/actions";
import "antd/dist/reset.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: getDevices,
        action: createDeviceAction,
        children: [
          {
            path: "/devices/:deviceId",
            element: <DeviceDashboard />,
            loader: deviceLoader,
          },
        ],
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={theme} form={{ validateMessages }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
