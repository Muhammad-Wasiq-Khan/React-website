// import Link from "react-router-dom";
import './style.css'
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function LogIn() {
    let [email, setEmail] = useState()
    let [role, setrole] = useState();
    let useNav = useNavigate();

    let checkFunction = () => {
        const user = localStorage.getItem("userRole");
        console.log(user)
        if (user == "user") {
            useNav("/user/home")
        }
        if (user == "admin") {
            useNav("/admin/dashoard")
        }
    };
    useEffect(() => {
        checkFunction()
        // userLogin()
    }, []);

    const userLogin = () => {
        // console.log(role)
        localStorage.setItem("userRole", role);

    };
    return (
        <>
            <section className="auth-page">
                <div className="auth-card">
                    <h1 className="auth-title">Welcome Back</h1>
                    <div className="form login-form">
                        <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required></input>
                        <input type="password" placeholder="Password" required></input>
                        <select name="userRole"  value={role} onChange={(e) => setrole(e.target.value)}>
                            <option value="user" className='option' selected>User</option>
                            <option value="admin"  className='option'>Admin</option>
                        </select>
                        <button onClick={() => userLogin()}>Login</button>
                        <p className="switch-text">Don't have an account? <span id="showSignup">Sign Up</span></p>
                    </div>
                </div>
            </section>
        </>)
}
export default LogIn