import './style.css'
import { Link, useLocation } from "react-router-dom";
function SignIn() {
    return (
        <>
            <section className="auth-page">
                <div className="auth-card">
                    <h1 className="auth-title">Welcome Back</h1>
                    <form className="form signup-form">
                        <input type="text" placeholder="Full Name" required></input>
                        <input type="text" placeholder="Username" required></input>
                        <input type="email" placeholder="Email" required></input>
                        <input type="password" placeholder="Password" required></input>
                        <button type="submit">Sign Up</button>
                        <p className="switch-text">Already have an account? <span id="showLogin">Log In</span></p>
                    </form>

                </div>

            </section>
        </>
    )
}
export default SignIn