import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSuccess.css"; 

export default function LoginSuccess() {
    const navigate = useNavigate();
 
    const handleGoToProfile = () => {
        navigate("/profile");
    };

    return (
        <div className="success-container">
            <div className="success-card">
                <h1>Login Successful! 🚀</h1>
                <p className="success-msg">Welcome back! You are now logged in.</p>
                <button onClick={handleGoToProfile}>Go To Profile</button>
            </div>
        </div>
    );
}