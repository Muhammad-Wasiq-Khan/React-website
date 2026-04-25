import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

let Navbar = (props) => {
  let location = useLocation()

  return (
    <nav className="navbar">
      <Link className={location.pathname == "/" ? "active act" : "link"} to={"/"}>
        Home
      </Link>
      <Link className={location.pathname == "/about" ? "active act" : "link"} to={"/about"}>
        About
      </Link>
      <Link className={location.pathname == "/contact" ? "active act" : "link"} to={"/contact"}>
        Contact
      </Link>
      <Link className={location.pathname == "/product" ? "active act" : "link"} to={"/product"}>
      Products
      </Link>
      <Link to={"/users"} className={location.pathname == "/users" ? "active act" : "link"}>User</Link>
      <Link to={"/signIn"} className= "link">Sign In</Link>
      <Link to={"/logIn"} className= "link">Log In</Link>

    </nav>
  );
};
export default Navbar;
