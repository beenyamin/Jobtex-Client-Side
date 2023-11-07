import Benar from "./Benar";
import GetJob from "./GetJob";
import JobsAvailable from "./JobsAvailable";
import Tabs from "./Tabs";
import What from "./What";


const Home = () => {
    return (
        <div>

            <Benar></Benar>
            <Tabs></Tabs>
            <JobsAvailable></JobsAvailable>
            <What></What>
            <GetJob></GetJob>
        </div>
    );
};

export default Home;