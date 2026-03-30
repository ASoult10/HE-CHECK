import { NavLink } from 'react-router-dom'
import './AppNav.css'
import logo from '../assets/logo.svg'

export default function AppNav() {
    return (
        <nav className="app-nav">
            <div className="nav-logo">
                <NavLink to="/" className="logo">
                    <img src={logo} alt="HE-CHECK logo" className="logo-img" />
                    <h1>HE-CHECK</h1>
                </NavLink>
            </div>
            <div className="nav-otherlinks">
                <NavLink to="/" className="nav-link"><h3>Inicio</h3></NavLink>
                <NavLink to="/about" className="nav-link"><h3>Sobre</h3></NavLink>
                <NavLink to="/info" className="nav-link"><h3>Información</h3></NavLink>
            </div>
        </nav>
    )
}