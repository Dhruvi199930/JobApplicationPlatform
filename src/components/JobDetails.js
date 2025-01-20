import React from "react";
import { useParams, Link } from "react-router-dom";
import { jobs } from "../data";

const JobDetails = () => {
    const { id } = useParams();
    const job = jobs.find((j) => j.id === parseInt(id));

    return (
        <div style={{ padding: "20px" }}>
            <h2>{job.title}</h2>
            <h3>{job.company}</h3>
            <p>{job.location}</p>
            <p>{job.description}</p>
            <Link to={`/apply/${job.id}`}>
                <button>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;
