import { Link, useLocation, useNavigate } from "react-router-dom";
import register from "../../assets/Queue-amico.png"
import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Hook/AuthProvider";
import { AiFillGoogleCircle, AiOutlineGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

const Register = () => {

    const { googleSingUp, createUser, userUpdateProfile } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handelRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const img = form.photo.value;

        if (password.length < 6) {
            toast.error('Please most be at 6 characters');
            return
        } else if (!/(?=.*[A-Z])(?=.*[_.!@$*=-?#])/.test(password)) {
            toast.error('Your password should have at lest one upper case and special character')
            return;
        }

        createUser(email, password)

            .then(res => {
                console.log(res.user)
                userUpdateProfile(name, img)
                    .then(res => {
                        console.log(res)
                        navigate(location.state ? location.state : '/login')
                        toast.success('Successfully Registration!');

                    })
            })

            .catch(error => {

                toast.error(error.message);


            })


    }

    const handelGoogleRegister = () => {
        googleSingUp()
            .then(res => {
                console.log(res.user)
                if (res.user) {
                    navigate(location.state ? location.state : '/')
                    toast.success('Successfully Registration!')
                    return
                }
            })
            .catch(error => {
                if (error) {
                    toast.error(error.message)
                    return
                }

            })

    }




    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:place-items-center bg-base-100 ">
            <Helmet>
                <title>JobTex | Register</title>
            </Helmet>
            <div className="rounded-lg p-10 w-full" >
                <form onSubmit={handelRegister} >
                    <p className="text-[#33967c]  text-2xl font-bold">Create a free jobtex account</p>
                    <div className="form-control w-full s">
                        <label className="label font-bold">
                            <span className="label-text ">Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered w-full " />
                        <label className="label">

                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label font-bold">
                            <span className="label-text ">Photo</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full " />
                        <label className="label">

                        </label>
                    </div>
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

                    <input className="btn btn-block bg-[#14a077]  my-5 text-white hover:bg-[#164f3f]" type="submit" value="Register Now" />

                </form>

                <div className=" lg:flex items-center justify-around w-full mx-auto">
                    <div className="">
                        <p className="font-bold text-lg text-center">Or Register With..</p>
                        <button onClick={handelGoogleRegister} className="btn rounded-full my-5 text-3xl  bg-white border border-[#14a077] hover:bg-[#14a077] hover:text-white"><AiFillGoogleCircle /></button>

                        <button className="btn rounded-full my-5 text-3xl  bg-white border border-[#14a077] hover:bg-[#14a077] hover:text-white mx-5"> <BsFacebook /> </button>

                        <button className="btn rounded-full my-5 text-3xl  bg-white border border-[#14a077] hover:bg-[#14a077] hover:text-white"> <AiOutlineGithub /> </button>
                    </div>

                    <p>Already have an account please <Link className="text-[#33967c] font-bold" to={'/login'}>Login</Link></p>


                </div>


            </div>

            <div>
                <img className="w" src={register} alt="" />
            </div>
        </div>
    );
};

export default Register;