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
import UpdatePost from "../Pages/UpdatePost/UpdatePost";
import Details from "../Pages/details/Details";


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
        {
          path: 'updatepost/:id',
          element: <PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/updatepost/${params.id}`)
        },
        {
          path: 'details/:id',
          element: <Details></Details>,
          loader: ({ params }) => fetch(`http://localhost:5000/updatepost/${params.id}`)

        }
      ]
    },
  ]);


  export default router;