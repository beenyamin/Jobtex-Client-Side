import { AiFillGoogleCircle, AiOutlineGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/Login-bro.png"
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Login = () => {


    const { googleSingUp, signIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handelLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            toast.error('Please most be at 6 characters');
            return
        } else if (!/(?=.*[A-Z])(?=.*[_.!@$*=-?#])/.test(password)) {
            toast.error('Your password should have at lest one upper case and special character')
            return;
        }
        signIn(email, password)
            .then(res => {
                console.log(res.user)
                const user = { email };

                axios.post('http://localhost:5000/user', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                            toast.success('Successfully Login!')
                        }
                    })

            })
            .catch(error => {
                if (error) {
                    toast.error(error.message)
                }

            })

    }

    const handelGoogleLogIn = () => {
        googleSingUp()
            .then(res => {
                const loggedInUser = res.user.email
                const user = { email: loggedInUser };
                axios.post('http://localhost:5000/user', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                            toast.success('Successfully Login!')
                        }
                    })
            })
            .catch(error => {
                if (error) {
                    toast.error(error.message)
                }

            })

    }



    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:place-items-center bg-base-100 ">
            <Helmet>
                <title>JobTex | Login</title>
            </Helmet>
            <div className="rounded-lg p-10 w-full" >
                <form onSubmit={handelLogin} >
                    <p className="text-[#33967c]  text-2xl font-bold">Login to jobtex</p>

                    <div className="form-control w-full ">
                        <label className="label font-bold">
                            <span className="label-text ">Email</span>
                        </label>
                        <input type="email" placeholder="Enter Your Email" name="email" className="input input-bordered w-full " />
                        <label className="label">

                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label font-bold">
                            <span className="label-text ">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" name="password" className="input input-bordered w-full " />
                        <label className="label">

                        </label>
                    </div>

                    <input className="btn btn-block bg-[#14a077]  my-5 text-white hover:bg-[#164f3f]" type="submit" value="Login" />

                </form>

                <div className=" lg:flex items-center justify-around w-full mx-auto">
                    <div className="">
                        <p className="font-bold text-lg text-center">Or Login With..</p>
                        <button onClick={handelGoogleLogIn} className="btn rounded-full my-5 text-3xl  bg-white border border-[#14a077] hover:bg-[#14a077] hover:text-white"><AiFillGoogleCircle /></button>

                        <button className="btn rounded-full my-5 text-3xl  bg-white border border-[#14a077] hover:bg-[#14a077] hover:text-white mx-5"> <BsFacebook /> </button>

                        <button className="btn rounded-full my-5 text-3xl  bg-white border border-[#14a077] hover:bg-[#14a077] hover:text-white"> <AiOutlineGithub /> </button>
                    </div>

                    <p>Don't you have an account? <Link className="text-[#33967c] font-bold" to={'/register'}>Register</Link></p>


                </div>


            </div>

            <div>
                <img src={login} alt="" />
            </div>
        </div>
    );
};

export default Login;