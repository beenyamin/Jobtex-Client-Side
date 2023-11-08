import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import toast from "react-hot-toast";
import {  useLocation, useNavigate } from "react-router-dom";


const AddJob = () => {

    const { user } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handelAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.jobtitle.value;
        const maximumPrice = form.maximumprice.value;
        const minimumPrice = form.minimumprice.value;
        const description = form.description.value;
        const date = form.date.value;
        const category = form.category.value;

        const jobPost = { jobTitle, maximumPrice, minimumPrice, description, date, category, email: user?.email }
        console.log(jobPost)

        fetch('https://assignment-11-server-nu-bay.vercel.app/jobPosts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobPost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {  
                    toast.success('Job Post Successfully')
                    navigate (location?.state ? location?.state : '/mypostedjobs')
                   
                }


            })


    }



    return (
        <div>


            <form onSubmit={handelAddJob} className="card-body">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job title</span>
                        </label>
                        <input type="text" name="jobtitle" placeholder="Job Title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Maximum price</span>
                        </label>
                        <input type="text" name="maximumprice" placeholder="Maximum price" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Minimum price</span>
                        </label>
                        <input type="text" placeholder="Minimum price" name="minimumprice" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select
                            name="category"
                            className="input input-bordered"
                        >
                            <option disabled selected>Category</option>
                            <option>Web Development</option>
                            <option>Digital Marketing</option>
                            <option>Graphics Design</option>
                        </select>

                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" placeholder="Date" name="date" className="input input-bordered" required />
                    </div>

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" name="description" placeholder="Description"></textarea>
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-block bg-[#14a077]  my-5 text-white hover:bg-[#164f3f]" type="submit" value="Add Job" />
                </div>
            </form>
        </div>
    );
};

export default AddJob;