import React, { useState } from "react";
import "./Style.css";
import { NavLink } from "react-router-dom";

export default function SignUp() {
    const [InputData, SetInputData] = useState({ name: "", email: "", location: "", date: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await fetch("http://localhost:5000/api/createuser/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(InputData)
            });
    
            if (resp.ok) {
                alert("User created successfully");
                SetInputData({ name: "", email: "", location: "", date: "", password: "" }); // Reset form fields
            } else {
                let data;
                try {
                    data = await resp.json();
                } catch (error) {
                    console.error("Error parsing JSON:", error);
                }
                if (data && data.message) {
                    alert("Error: " + data.message);
                } else {
                    alert("Unknown error occurred");
                }
            }
        } catch (error) {
            console.error("Fetch error:", error);
            alert("An error occurred. Please try again later.");
        }
    }
    
    const HandleOnChange = (e) => {
        SetInputData({ ...InputData, [e.target.name]: e.target.value })
    }

    return (
        <div className="register-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" required name="name" value={InputData.name} onChange={HandleOnChange} />
                
                <input type="email" placeholder="Email" required name="email" value={InputData.email} onChange={HandleOnChange} />

                <input type="text" placeholder="Your Current Location" required name="location" value={InputData.location} onChange={HandleOnChange} />

                <input type="date" placeholder="Date of Birth" required name="date" value={InputData.date} onChange={HandleOnChange} />

                <input type="password" placeholder="Password" required name="password" value={InputData.password} onChange={HandleOnChange} />

                <input type="submit" value="Sign Up" />
            </form>
            <div className="login-link">
                Already have an account? <NavLink to={"/login"}>Login</NavLink>
            </div>
        </div>
    )
}
