import Benar from "./Benar";
import BrowseByCategory from "./BrowseByCategory/BrowseByCategory";
import GetJob from "./GetJob";
import JobsAvailable from "./JobsAvailable";
import What from "./What";


const Home = () => {
    return (
        <div>

            <Benar></Benar>
            <BrowseByCategory></BrowseByCategory>
            <JobsAvailable></JobsAvailable>
            <What></What>
            <GetJob></GetJob>
        </div>
    );
};

export default Home;