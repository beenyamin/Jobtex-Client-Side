import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import JobPost from "../Pages/JobPost/JobPost";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddJob from "../Pages/AddJob/AddJob";
import MyBids from "../Pages/MyBids/MyBids";
import BidRequests from "../Pages/BidRequests/BidRequests";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'Register',
          element: <Register></Register>,
        },
        {
          path: 'jobpost',
          element: <PrivateRoute><JobPost></JobPost></PrivateRoute>,
        },
        {
          path: 'addjob',
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
        },
        {
          path: 'mybids',
          element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
        },
        {
          path: 'bidrequests',
          element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>,
        },
        {
          path: 'mypostedjobs',
          element:<PrivateRoute> <MyPostedJobs></MyPostedJobs></PrivateRoute>,
        },
      ]
    },
  ]);


  export default router;