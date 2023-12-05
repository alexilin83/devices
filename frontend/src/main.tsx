import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import theme, { validateMessages } from "../src/theme";
import Layout from "./common/components/Layout";
import ErrorPage from "./routes/Error";
import MapPage, { loader as devicesLoader } from "./routes/Map";
import DeviceInfo, { loader as deviceLoader, action as deleteDeviceAction } from "./routes/Map/components/DeviceInfo";
import DeviceError from "./routes/Map/components/DeviceError";
import CreateDevice, { action as createDeviceAction } from "./routes/CreateDevice";
import EditDevice, { action as updateDeviceAction } from "./routes/EditDevice";
import SettingsPage from "./routes/Settings";
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
        element: <MapPage />,
        loader: devicesLoader,
        children: [
          {
            path: "/devices/:id",
            element: <DeviceInfo />,
            errorElement: <DeviceError />,
            loader: deviceLoader,
            action: deleteDeviceAction,
          },
        ],
      },
      {
        path: "/devices/create",
        element: <CreateDevice />,
        action: createDeviceAction,
      },
      {
        path: "/devices/:id/edit",
        element: <EditDevice />,
        loader: deviceLoader,
        action: updateDeviceAction,
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
