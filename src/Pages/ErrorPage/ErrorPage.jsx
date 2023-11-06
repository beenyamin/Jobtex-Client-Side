
import { Link } from "react-router-dom";
import error from "../../assets/404 error with person looking for-bro.png"

const ErrorPage = () => {
    return (
        <div className="h-full items-center" >
            <dir className="flex justify-center">
                <img className="w-[700px]" src={error} alt="" />
            </dir>
            <div className="text-center">
                <Link to='/'>
                    <button className="btn btn-outline text-[#14a077]">GO TO HOME</button>
                </Link>
            </div>


        </div>

    );
};

export default ErrorPage;