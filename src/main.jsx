import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from "./pages/login.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home.jsx";
import SingleProduct from "./pages/singleProduct.jsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/single-product/:id",
            element: <SingleProduct></SingleProduct>
        }
    ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)