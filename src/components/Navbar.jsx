import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

let Navbar = (props) => {
  let location = useLocation()

  return (
    <nav className="navbar">
      <Link className={location.pathname == "/user/home" ? "active act" : "link"} to={"/user/home"}>
        Home
      </Link>
      <Link className={location.pathname == "/user/about" ? "active act" : "link"} to={"/user/about"}>
        About
      </Link>
      <Link className={location.pathname == "/user/contact" ? "active act" : "link"} to={"/user/contact"}>
        Contact
      </Link>
      <Link className={location.pathname == "/user/product" ? "active act" : "link"} to={"/user/product"}>
        Products
      </Link>
      <Link className={location.pathname == "/admin/users" ? "active act" : "link"} to={"/admin/users"}>User</Link>
      <Link  className="logout-btn" to={"/"} onClick={()=>{localStorage.removeItem("userRole");}}>Log Out</Link>
    </nav>
  );
};
export default Navbar;
