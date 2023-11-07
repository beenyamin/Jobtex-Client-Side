

const JobsAvailable = () => {
    return (
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full my-5 bg-[#c6e5eb]">

            <div className="stat">
                <div className="stat-title">Downloads</div>
                <div className="stat-value">2.5M+</div>
                <div className="stat-desc">Jobs Available</div>
            </div>

            <div className="stat">
                <div className="stat-title">New Users</div>
                <div className="stat-value">189k+</div>
                <div className="stat-desc">↗︎ New Jobs This Week!</div>
            </div>
            <div className="stat">
                <div className="stat-title">New Users</div>
                <div className="stat-value">189k+</div>
                <div className="stat-desc">Companies Hiring</div>
            </div>

            <div className="stat">
                <div className="stat-title">New Registers</div>
                <div className="stat-value">5M+</div>
                <div className="stat-desc">Candidates</div>
            </div>

        </div>
    );
};

export default JobsAvailable;