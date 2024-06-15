import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import MyProvider from "./MyProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CardDetailsProduct from "./components/products/card/CardDetailsProduct.jsx";
import Card from "./components/products/card/Card.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Card/:title", element: <Card /> },
  { path: "/Card-Details-Products/:id", element: <CardDetailsProduct /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyProvider>
    <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </React.StrictMode>
  </MyProvider>,
);
