import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyJob = ({ myPost, setMyPosts, myPosts }) => {

  const { _id, jobTitle, maximumPrice, minimumPrice, description, date, category, email } = myPost

  const handelDelete = id => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/job/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = myPosts.filter(item => item._id !== id);
              setMyPosts(remaining);

            }
          })

      }
    });

  }





  return (
    <div className="px-5 pt-5 rounded-lg  bg-[#c6e5eb] ">

      <div className="space-y-2">
        <h2 className="card-title text-emerald-600 text-2xl">{jobTitle}</h2>
        <p> <span className="font-bold">Maximum Price:</span> ${maximumPrice}</p>
        <p><span className="font-bold">Minimum Price:</span> ${minimumPrice}</p>
        <p><span className="font-bold">Category:</span> {category}</p>
      </div>
      <div className="card-actions justify-between">
        <Link to={`/updatepost/${_id}`}>
          <button className="btn bg-[#14a077]  my-5 text-white hover:bg-[#164f3f]">Update</button>
        </Link>
        <button onClick={() => handelDelete(_id)} className="btn bg-[#a01420]  my-5 text-white hover:bg-[#4f161b]">Delete</button>
      </div>
    </div>
  );
};

export default MyJob;