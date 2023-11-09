import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const UpdatePost = () => {

    const jobPost = useLoaderData();
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const { _id, jobTitle, maximumPrice, minimumPrice, description, date, category, email } = jobPost || {};


    const handelUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.jobtitle.value;
        const maximumPrice = form.maximumprice.value;
        const minimumPrice = form.minimumprice.value;
        const description = form.description.value;
        const date = form.date.value;
        const category = form.category.value;

        const jobPost = { jobTitle, maximumPrice, minimumPrice, description, date, category, email: user?.email }

        fetch(`https://assignment-11-server-nu-bay.vercel.app/updatepost/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobPost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Update Successfully')
                    navigate(location?.state ? location?.state : '/mypostedjobs')
                }
            })

    }


    return (
        <div>
            <Helmet>
               <title>JobTex | Update Post</title>
            </Helmet>
            <form onSubmit={handelUpdate} className="card-body">
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
                        <input type="text" name="jobtitle" defaultValue={jobTitle} placeholder="Job Title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Maximum price</span>
                        </label>
                        <input type="text" name="maximumprice" defaultValue={maximumPrice} placeholder="Maximum price" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Minimum price</span>
                        </label>
                        <input type="text" placeholder="Minimum price" name="minimumprice" defaultValue={minimumPrice} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select
                            name="category" defaultValue={category}
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
                        <input type="date" placeholder="Date" name="date" defaultValue={date} className="input input-bordered" required />
                    </div>

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" name="description" defaultValue={description} placeholder="Description"></textarea>
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-block bg-[#14a077]  my-5 text-white hover:bg-[#164f3f]" type="submit" value="Update Post" />
                </div>
            </form>
        </div>

    );
};

export default UpdatePost;