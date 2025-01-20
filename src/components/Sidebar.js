import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h2>Job Platform</h2>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/jobs">Jobs</Link></li>
                    <li><Link to="/apply/1">Apply</Link></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
