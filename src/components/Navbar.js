import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user }) => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("currentUser");
        navigate("/login");
    };

    return (
        <div className="layout">
            {/* Sidebar */}
            {isAuthenticated === "true" && user && (
                <aside className="sidebar">
                    <h3>Welcome, {user.name || "User"}!</h3>
                    <p>{user.email}</p>
                    <button onClick={handleLogout} className="btn-logout">Logout</button>
                </aside>
            )}

            {/* Navbar */}
            <nav className="navbar">
                <h2>Job Application Platform</h2>
                <div>
                    <Link to="/" className="nav-link">Home</Link>
                    {isAuthenticated === "true" ? (
                        <button onClick={handleLogout} className="btn-logout">Logout</button>
                    ) : (
                        <>
                            <Link to="/login" className="nav-link">Login</Link>
                            <Link to="/register" className="nav-link">Register</Link>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
