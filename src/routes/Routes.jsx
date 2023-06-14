import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Instructor from "../pages/Instructor/Instructor";
import Class from "../pages/class/Class";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Enroll from "../pages/enroll/Enroll";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../components/NotFound";
import DashBoard from "../layout/DashBoard";
import MySelectedClasses from "../pages/studenDashboard/MySelectedClasses";
import MyEnrolledClasses from "../pages/studenDashboard/MyEnrolledClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/instructor",
        element: <Instructor></Instructor>
      },
      {
        path: "/class",
        element: <Class></Class>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/enroll',
        element: <PrivateRoute><Enroll></Enroll></PrivateRoute>
      }
      
    ]
  },
  
    {
      path: '/dashboard',
      element: <DashBoard></DashBoard>,
      children:[
        {
          path: 'selected',
          element: <MySelectedClasses></MySelectedClasses>
        },
        {
          path: 'enrolled',
          element: <MyEnrolledClasses></MyEnrolledClasses>
        }
      ]

    },
    
  
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]);