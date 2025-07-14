import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterSuccess.css";

export default function RegisterSuccess() {
    const navigate = useNavigate();

    const handleGoToProfile = () => {
        navigate("/profile");
    };

    return (
        <div className="success-container">
            <div className="success-card">
                <h1>Registration Successful! 🎉</h1>
                <p>Your account has been created successfully.</p>
                <button onClick={handleGoToProfile}>Go to Profile</button>
            </div>
        </div>
    );
}