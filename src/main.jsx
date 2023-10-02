//Components
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Pañol from "./pages/Pañol.jsx"
// Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Sistemas from './pages/Sistemas.jsx';

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: ( 
        <App /> 
    ),
  },
  {
    path: "/home",
    element: (
        <Home />
    ),
  },
  {
    path: "/Sistemas",
    element: (
        <Sistemas />
    ),
  },
  {
    path: "/taller",
    element: (
        <Pañol />
    ),
  },
  {
    path: "/petzify",
    element: (
        <Home />
    ),
  },
  {
    path: "/medical",
    element: (
        <Home />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);