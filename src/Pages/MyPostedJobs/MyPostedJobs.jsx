import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import MyJob from "./MyJob";
import { Helmet } from "react-helmet-async";


const MyPostedJobs = () => {

    const { user } = useContext(AuthContext);

    const [myPosts, setMyPosts] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/mypostedjobs?email=${user?.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => setMyPosts(data))
    }, [user?.email])



    return (
        <div>
            <Helmet>
                <title>JobTex | My Posted Job</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-5">
                {
                    myPosts.map(myPost => <MyJob
                        myPosts={myPosts}
                        setMyPosts={setMyPosts}
                        myPost={myPost}
                        key={myPost._id}
                    ></MyJob>)
                }
            </div>
        </div>
    );
};

export default MyPostedJobs;