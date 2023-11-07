import img from "../../assets/slider4.png"


const Benar = () => {
    return (
        <div>
            <div className="hero  bg-[#123841]">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="lg:w-1/2">
                        <img src={img} />
                    </div>
                    <div className="lg:w-1/2">
                        <h1 className="lg:text-5xl text-3xl font-bold text-white ">Find The Job That <br />
                            Fits Your Life</h1>
                        <p className="py-6 lg:text-lg text-white ">Resume-Library is a true performance-based job board. Enjoy custom hiring products and access to up to 10,000 new resume registrations daily, with no subscriptions or user licences.</p>
                        <div className="lg:join">
                            <div>
                                <div>
                                    <input className="input input-bordered join-item" placeholder="Search" />
                                </div>
                            </div>
                            <select className="select select-bordered join-item">
                                <option disabled selected>Filter</option>
                                <option>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Graphics Design</option>
                            </select>
                            <div className="indicator">
                                <button className="btn join-item">Find Job</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Benar;