import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import WebsiteRouter from "./Router/WebsiteRouter.jsx";
import { AuthProvider } from "./Providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={WebsiteRouter}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
