import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import ApplicationForm from "./components/ApplicationForm";
import Login from "./components/Login";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        setUser(currentUser);
    }, []);

    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <Navbar user={user} />
                <Routes>
                    <Route path="/" element={<JobList />} />
                    <Route path="/jobs/:id" element={<JobDetails />} />
                    <Route
                        path="/apply/:id"
                        element={
                            <ProtectedRoute>
                                <ApplicationForm />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
