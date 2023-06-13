import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Instructor from "../pages/Instructor/Instructor";
import Class from "../pages/class/Class";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/instructor",
            element:<Instructor></Instructor>
        },
        {
            path:"/class",
            element:<Class></Class>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        }
      ]
    },
  ]);