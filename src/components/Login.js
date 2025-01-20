import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((u) => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("currentUser", JSON.stringify(user));
            navigate("/");
        } else {
            setError("Invalid email or password.");
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;
