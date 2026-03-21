import { NavLink } from 'react-router-dom'
import './Footer.css'
import logo from '../assets/react.svg'

export default function Footer() {
    return (
        <nav className="footer">
            <div className="nav-logo">
                <NavLink to="/" className="logo">
                    <img src={logo} alt="HE-CHECK logo" className="logo-img" />
                    <h1>HE-CHECK</h1>
                </NavLink>
            </div>
            <div className="nav-otherlinks">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/info" className="nav-link">Info</NavLink>
            </div>
        </nav>
    )
}