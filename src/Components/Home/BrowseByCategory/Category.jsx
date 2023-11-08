import { Link } from "react-router-dom";


const Category = ({ job }) => {

    const { _id, jobTitle, maximumPrice, minimumPrice, description, date, category, email } = job

    return (
        <div className="px-5 pt-5 rounded-lg  bg-[#c6e5eb] ">
            <div className="space-y-2">
                <h2 className="card-title text-emerald-600 text-2xl">{jobTitle}</h2>
                <p> <span className="font-bold">Maximum Price:</span> ${maximumPrice}</p>
                <p><span className="font-bold">Minimum Price:</span> ${minimumPrice}</p>
                <p><span className="font-bold">Category:</span> {category}</p>
            </div>
            <div className="card-actions justify-between">
                <Link to={`/details/${_id}`}>
                    <button className="btn bg-[#14a077]  my-5 text-white hover:bg-[#164f3f]">details</button>
                </Link>
                <button className="btn bg-[#a01420]  my-5 text-white hover:bg-[#4f161b]">Bit</button>
            </div>
        </div>
    );
};


export default Category;