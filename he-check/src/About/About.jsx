import { useEffect } from 'react'
import './About.css'
import GitHubLogo from '../assets/GitHubLogo.png'
import LinkedInLogo from '../assets/LinkedInLogo.png'

export default function About() {
  const handleScrollingToTop = () => {
    const appNavLocation = document.querySelector('.app-nav')
    if (appNavLocation) {
      const top = appNavLocation.getBoundingClientRect().top
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
    }
  }

  useEffect(() => {
    handleScrollingToTop()
  }, [])

  return (
    <div className="about">
      <div className="info-section">
        <h1>Sobre el autor</h1>
        <p>HE-CHECK ha sido desarrollado por Alejandro Soult Toscano, un estudiante del Grado en Ingeniería Informática del Software, como parte de su Trabajo de Fin de Grado.</p>
        <p>Durante su formación académica, el autor ha participado como alumno interno en actividades relacionadas con la preparación y elaboración de propuestas en el contexto de programas europeos de I+D+i. Esta experiencia ha permitido adquirir una comprensión práctica de los principales retos a los que se enfrentan las entidades a la hora de diseñar propuestas competitivas, así como de los criterios de evaluación a considerar.</p>
        <p>El desarrollo de HE-CHECK surge precisamente de esta experiencia, con el objetivo de trasladar ese conocimiento a una herramienta accesible que facilite la evaluación preliminar de propuestas y ayude a mejorar su calidad antes de su entrega formal.</p>
      </div>

      <div className="info-section">
        <h1>Relación con el framework FRONDA</h1>
        <p>HE-CHECK se enmarca como una herramienta complementaria dentro del ecosistema del framework FRONDA, orientado al apoyo en la preparación y evaluación de propuestas de proyectos en programas europeos.</p>
        <p>Mientras que FRONDA proporciona una estructura metodológica para el diseño de propuestas, HE-CHECK introduce un componente digital y automatizado de evaluación basado en los criterios oficiales. De este modo, permite validar de forma rápida y objetiva distintos aspectos clave de una propuesta, identificando posibles debilidades y áreas de mejora.</p>
        <p>Esta herramienta se puede integrar con FRONDA para ofrecer una solución completa de apoyo en la preparación y evaluación preliminar de propuestas.</p>
        <p>Es importante destacar que este proyecto tiene un carácter académico y experimental, y no sustituye en ningún caso los procesos oficiales de evaluación establecidos por la Comisión Europea.</p>
      </div>

      <div className="links-section">
        <h1>Enlaces de interés</h1>
        <p>Se puede consultar más información y acceder al código fuente del proyecto en los siguientes enlaces:</p>
        <div className='link'>
          <img src={GitHubLogo} alt="GitHub Logo" />
          <p><a href="https://github.com/ASoult10/HE-CHECK" target="_blank" rel="noopener noreferrer">Repositorio en GitHub</a></p>
        </div>
        <div className='link'>
          <img src={LinkedInLogo} alt="LinkedIn Logo" />
          <p><a href="https://www.linkedin.com/in/alejandro-soult-toscano" target="_blank" rel="noopener noreferrer">Perfil de LinkedIn</a></p>
        </div>
      </div>
    </div>
  )
}