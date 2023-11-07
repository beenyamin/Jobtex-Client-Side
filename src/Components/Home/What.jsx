import img from "../../assets/h41.jpg"
import { BiCommand } from 'react-icons/bi';

const What = () => {
    return (
        <div>
            <div className=" bg-[#f9f1f0] mb-5 ">
                <div className=" lg:flex ">
                    <div className="lg:w-1/2">
                        <img src={img} />
                    </div>
                    <div className="lg:w-1/2 p-10 space-y-5">
                        <h1 className="lg:text-5xl text-3xl font-bold ">What can I do with Jobtex?
                        </h1>
                        <p className="text-lg font-semibold my-3">Streamline your hiring process with strategic channels to reach qualified candidates</p>
                        <div className="flex items-center">
                            <div className="text-5xl mr-2 text-[#14a077]">
                                <BiCommand/>
                            </div>
                            <div>
                                <h2 className="font-bold text-2xl">Reduce Hiring Bias</h2>
                                <p className="text-lg">Structured digital interviews increase the predictive validity of your hires by 65%.</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-5xl mr-2 text-[#14a077]">
                                <BiCommand/>
                            </div>
                            <div>
                                <h2 className="font-bold text-2xl">Save Time & Headspace</h2>
                                <p className="text-lg">Reduce your time-to-hire by up to 80% and free up headspace for other HR priorities.</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-5xl mr-2 text-[#14a077]">
                                <BiCommand/>
                            </div>
                            <div>
                                <h2 className="font-bold text-2xl">Minimize Environmental Impact</h2>
                                <p className="text-lg">Did you know? U.S. office workers use ~10,000 sheets of paper every year.</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="text-5xl mr-2 text-[#14a077]">
                                <BiCommand/>
                            </div>
                            <div>
                                <h2 className="font-bold text-2xl">Save Money</h2>
                                <p className="text-lg">Interview more candidates, more quickly – and still save money.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default What;
