import React from "react";
import "./Style.css";
import { NavLink } from "react-router-dom";
export default function LoginPage() {
  return(
      <div class="login-container">
        <h2>Login</h2>
        <form action="#">
            <input type="text" placeholder="Email" required></input>
            <input type="password" placeholder="Password" required></input>
            <input type="submit" value="Login"></input>
        </form>
        <div class="signup-link">
            Don't have an account? <NavLink to={"/signup"}>SignUp
            </NavLink>
        </div>
    </div>
    
  );
}
