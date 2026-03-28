import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <nav className="footer">
            <div className="texts">
                <p>HE-CHECK — Herramienta de apoyo para la evaluación de propuestas en Horizonte Europa</p>
                <p>Desarrollado por Alejandro Soult Toscano como parte de su Trabajo de Fin de Grado en Ingeniería Informática del Software</p>
                <p>Esta herramienta no sustituye la evaluación oficial de propuestas</p>
                <p>© 2026 HE-CHECK. Todos los derechos reservados.</p>
            </div>
            <div className="email">
                <h3>¿Alguna pregunta?</h3>
                <p>Contacto: <a href="mailto:alesoutos@alum.us.es">alesoutos@alum.us.es</a></p>
            </div>
        </nav>
    )
}