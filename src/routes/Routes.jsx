
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/shared/errorPage/ErrorPage";
import Home from "../components/home/home/Home";
import Login from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import DashboardLayout from './../layout/DashboardLayout';
import DashboardHome from "../components/dashboard/DashboardHome";
import AddFeature from "../components/dashboard/AddFeature";
import ManageAllfeature from "../components/dashboard/ManageAllfeature";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <SignUp />,
        },
      ],
    },

    {
        path: "/dashboard",
        element: (
          
            <DashboardLayout />
         
        ),
        children: [
          {
            index: true,
            element: <DashboardHome/>,
          },
          {
            path: "manageFeature",
            element: <ManageAllfeature />,
            loader: ()=>fetch('http://localhost:5000/pets'),
          },
          {
            path: "addFeature",
            element: <AddFeature />,
          },
        //   {
        //     path: "edit-recipe/:id",
        //     element: <EditRecipe />,
        //   },
        //   {
        //     path: "updateUser/:id",
        //     element: <EditProfile />,
        //     loader:({params})=>fetch(`http://localhost:4000/user/edit/${params.id}`)
        //   },
        ],
      },
  ]);