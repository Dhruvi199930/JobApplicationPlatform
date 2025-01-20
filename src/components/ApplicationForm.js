import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { jobs } from "../data";

const ApplicationForm = () => {
    const { id } = useParams();
    const job = jobs.find((j) => j.id === parseInt(id));

    const [formData, setFormData] = useState({ name: "", email: "", resume: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Application Submitted for ${job.title}`);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Apply for {job.title}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Resume Link:</label>
                    <input type="url" name="resume" value={formData.resume} onChange={handleChange} required />
                </div>
                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
};

export default ApplicationForm;
