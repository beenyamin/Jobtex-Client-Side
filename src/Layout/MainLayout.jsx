import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";



const MainLayout = () => {
    return (
        <div className=" lg:w-10/12 m-auto my-5">
            <Helmet>
                <title>JobTex | Home</title>
            </Helmet>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
           
        </div>
    );
};

export default MainLayout;