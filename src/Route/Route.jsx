import {
  createBrowserRouter,
} from "react-router-dom";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import Error from "../Components/Error/Error";
import UserIdLayout from "../Layout/LoginLayout/UserIdLayout";
import Main from "../Layout/HomeLayout/Main";
import DataLayout from "../Layout/DataLayout/DataLayout";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import Blogs from "../Components/Blogs/Blogs";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Terms from "../Components/Terms/Terms";
import ChefRecipes from "../Components/ChefRecipes/ChefRecipes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://b7a10-chef-recipe-hunter-server-side-sadik-sadik-ahmmed-tonmoy.vercel.app/data')
      }
    ]
  },


  {
    path: '/data',
    element: <DataLayout></DataLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/data/blogs',
        element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
      },
      {
        path: '/data:id',
        element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
        loader: ({params}) => fetch(`https://b7a10-chef-recipe-hunter-server-side-sadik-sadik-ahmmed-tonmoy.vercel.app/data/${params.id}`)
      },
    ]
  },



  {
    path: '/UserIdLayout',
    element: <UserIdLayout></UserIdLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/UserIdLayout/login',
        element: <Login></Login>
      },
      {
        path: '/UserIdLayout/register',
        element: <Register></Register>
      },
      {
        path: '/UserIdLayout/terms',
        element: <Terms></Terms>
      },
    ]
  },

]);

export default router;