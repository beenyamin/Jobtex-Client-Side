import { AiFillCheckCircle } from "react-icons/ai";
import img from "../../assets/h42.png"

const GetJob = () => {
    return (
        <div className="hero bg-[#c6e5eb] ">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="lg:w-1/2">
                    <img src={img} />
                </div>
                <div className="lg:w-1/2">
                    <h1 className="lg:text-5xl text-3xl font-bold ">Get the job that's right for you
                    </h1>
                    <div className="space-y-2">
                        <p className="py-6 lg:text-lg  ">Search millions of jobs and get the inside scoop on companies with employee reviews, personalized salary tools, and more.</p>
                        <p className="flex items-center text-lg font-semibold"> <span className="text-green-700 mr-1"> <AiFillCheckCircle /> </span>Access to millions of job seekers</p>
                        <p className="flex items-center text-lg font-semibold"> <span className="text-green-700 mr-1"> <AiFillCheckCircle /> </span>Only pay for the candidates you want to contact</p>
                        <p className="flex items-center text-lg font-semibold"> <span className="text-green-700 mr-1"> <AiFillCheckCircle /> </span>Post unlimited jobs for free—all from one place</p>
                        <p className="flex items-center text-lg font-semibold"> <span className="text-green-700 mr-1"> <AiFillCheckCircle /> </span>Premium job placement on SimplyHired, Indeed, & over 100 job sites</p>
                        <p className="flex items-center text-lg font-semibold"> <span className="text-green-700 mr-1"> <AiFillCheckCircle /> </span>Hiring solutions & pricing that works with seasonal hiring changes</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GetJob;