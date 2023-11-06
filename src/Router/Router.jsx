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
          element: <JobPost></JobPost>,
        },
        {
          path: 'addjob',
          element: <AddJob></AddJob>,
        },
        {
          path: 'mybids',
          element: <MyBids></MyBids>,
        },
        {
          path: 'bidrequests',
          element: <BidRequests></BidRequests>
        },
      ]
    },
  ]);


  export default router;