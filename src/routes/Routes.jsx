
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
import EditFeatures from "../components/dashboard/EditFeatures";
import Profile from "../components/dashboard/Profile";
import UpdateProfile from "../components/dashboard/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import PetDetails from "../components/feature/PetDetails";
import About from "../components/home/about/About";
import Feature from "../components/feature/Feature";
import Contact from "../components/home/contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/feature",
        element: <Feature />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Profile",
        element:<PrivateRoute> <Profile /></PrivateRoute>,
      },
      {
        path: "/details/:id",
        element:<PrivateRoute> <PetDetails></PetDetails></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/pets/details/${params.id}`)
      },
      {
        path: "/updateProfile/:id",
        element: <UpdateProfile />,
        loader: ({ params }) => fetch(`http://localhost:5000/user/update/${params.id}`)
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "manageFeature",
        element: <PrivateRoute><ManageAllfeature /></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/pets'),
      },
      {
        path: "addFeature",
        element: <AddFeature />,
      },

      {
        path: "editFeatures/:id",
        element: <PrivateRoute><EditFeatures /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/pets/single/${params.id}`)
      },
      //   {
      //     path: "updateUser/:id",
      //     element: <EditProfile />,
      //     loader:({params})=>fetch(`http://localhost:4000/user/edit/${params.id}`)
      //   },
    ],
  },
]);