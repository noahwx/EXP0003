import { NavLink } from "react-router-dom";
import Logo from './Logo.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/"><img src={Logo} className="navlogo" alt=""/></NavLink>
            <div className="navlinks">
                <NavLink to="/" className="navlink">Home</NavLink>
                <NavLink to="/pages/Order" className="navlink">Order</NavLink>
                <NavLink to="/pages/Menu" className="navlink">Menu</NavLink>
                <NavLink to="/pages/ContactUs" className="navlink">Contact Us</NavLink>
            </div>
        </nav>
    );
}
 
export default Navbar;