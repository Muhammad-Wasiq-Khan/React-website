// import Link from "react-router-dom";
import './style.css'
function LogIn() {
    return (
        <><section className="auth-page">
            <div className="auth-card">
                <h1 className="auth-title">Welcome Back</h1>
                <form className="form login-form">
                    <input type="email" placeholder="Email" required></input>
                    <input type="password" placeholder="Password" required></input>
                    <button type="submit">Login</button>
                    <p className="switch-text">Don't have an account? <span id="showSignup">Sign Up</span></p>
                </form>
            </div>
        </section>
        </>
    )
}
export default LogIn