import React from "react";
import { RouterProvider} from "react-router-dom";
import Layout from './components/layouts/Layout.jsx'
import Register from "./components/web/Regester.jsx";
import Login from "./components/web/Login.jsx";
import Home from "./components/web/Home.jsx";
import Categories from "./components/web//Categories.jsx";
import DashboardLayout from "./components/layouts/Dashboard.jsx";
import HomeDashboard from './components/dashboard/Home.jsx';
import CategoriesDashboard from './components/dashboard/Categories.jsx'
import { createBrowserRouter } from "react-router-dom";
 const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
        {
          path:'register',
          element:<Register />
        },
        {
          path:'login',
          element:<Login />
        },
        {
          path:'home',
          element:<Home />
        },
        {
          path:'categories',
          element:<Categories />
        },
        {
          path:'*',
          element:<h2>page not found --- web</h2>
        }
    ]
  },
  {
      path:'/dashboard',
      element:<DashboardLayout />,
      children:[{
      path:'home',
      element:<HomeDashboard />
    }
    ,{
      path:'categories',
      element:<CategoriesDashboard />
    },
    {
      path:'*',
      element:<h2>page not found --- dashboard</h2>
    }
  ]


  }
]);
export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
