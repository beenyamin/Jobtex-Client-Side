import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { AiOutlineUser } from 'react-icons/ai';
import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const navLink = <>

        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#14a077]" : ""}>Home
        </NavLink> </li>

        <li><NavLink to="/addjob" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#14a077]" : ""}>Add job
        </NavLink> </li>

        <li><NavLink to="/mybids" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#14a077]" : ""}>My Bids
        </NavLink> </li>

        <li><NavLink to="/bidrequests" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#14a077]" : ""}>Bid
Requests
        </NavLink> </li>

    </>
    const handelLogout = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Logout')
            }).catch((error) => {
                toast.error(error)
            });
    }



    return (
        <div className="navbar bg-base-200 py-5 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5 text-lg font-semibold ">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">

            {
                user?.email ? 
                
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>{user.displayName}</a></li>
                        <li><a>{user.email}</a></li>
                        <li><a onClick={handelLogout}>Logout</a></li>
                    </ul>
                </div>
                
                : 

                           
                <div className="flex items-center text-lg font-semibold hover:text-[#14a077] hover:cursor-pointer">
                    <div className="text-3xl">
                        <AiOutlineUser />
                    </div>
                    <p>
                        Login
                    </p>
                </div>

            }

                <button className="btn lg:w-36 bg-white border border-[#14a077] hover:bg-[#14a077] hover:text-white ml-2 lg:ml-5">Post Job</button>
            </div>
        </div>
    );
};

export default Header;