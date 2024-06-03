
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
        //   {
        //     path: "manage-recipes",
        //     element: <ManageAllRecipe />,
        //   },
        //   {
        //     path: "add-recipe",
        //     element: <AddRecipe />,
        //   },
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