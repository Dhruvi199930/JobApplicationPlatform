import React from "react";
import { Link } from "react-router-dom";
import { jobs } from "../data";

const JobList = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Available Jobs</h2>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id} style={{ marginBottom: "10px" }}>
                        <h3>{job.title}</h3>
                        <p>{job.company} - {job.location}</p>
                        <Link to={`/jobs/${job.id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;
