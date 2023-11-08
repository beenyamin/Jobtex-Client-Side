import { useLoaderData } from "react-router-dom";


const Details = () => {

    const alljob = useLoaderData();
    const { _id, jobTitle, maximumPrice, minimumPrice, description, date, category, email } = alljob


    return (
        <div>
            <h1>details:{jobTitle}</h1>
            <div>
                <div className=" lg:card-side bg-base-300 shadow-xl p-10 my-5 space-y-2">
                    

                    <h1 className="text-2xl font-bold text-green-700">Job Title: {jobTitle}</h1>
                    <p><span className="font-bold">Category:</span> {category} </p>
                    <p><span className="font-bold">Maximum Price:</span> {maximumPrice}$ </p>
                    <p><span className="font-bold">Manimum Price:</span> {minimumPrice}$ </p>
                    <p><span className="font-bold">Date:</span> {date} </p>
                    <p><span className="font-bold">Email:</span> {email} </p>
                    <p><span className="font-bold">Description:</span> {description} </p>
                    </div>
                </div>
            </div>
  
    );
};

export default Details;