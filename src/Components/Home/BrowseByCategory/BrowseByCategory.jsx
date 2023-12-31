import { useEffect, useState } from "react";
import Category from "./Category";



const BrowseByCategory = () => {

    const [allJobs, setAllJobs] = useState([])


    useEffect(() => {
        fetch('https://assignment-11-server-nu-bay.vercel.app/allpost')
            .then(res => res.json())
            .then(data => setAllJobs(data))

    }, [])

    return (
        <div>
         
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-5">
                {
                    allJobs.map(job => <Category
                        key={job._id}
                        job={job}
                    ></Category>)
                }

            </div>
        </div>
    );
};

export default BrowseByCategory;