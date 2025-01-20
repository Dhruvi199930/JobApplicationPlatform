import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.find((user) => user.email === email)) {
            setError("User already exists.");
            return;
        }

        users.push({ email, password, name: email.split("@")[0] });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");
        navigate("/login");
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleRegister}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;
