import { NavLink } from 'react-router-dom'
import './AppNav.css'
import logo from '../assets/react.svg'

export default function AppNav() {
    return (
        <nav className="app-nav">
            <div className="nav-logo">
                <NavLink to="/" className="logo">
                    <img src={logo} alt="HE-CHECK logo" className="logo-img" />
                    HE-CHECK
                </NavLink>
            </div>
            <div className="nav-otherlinks">
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/info" className="nav-link">Info</NavLink>
            </div>
        </nav>
    )
}