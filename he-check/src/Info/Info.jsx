import './Info.css'
export default function Info() {
  return (
    <div className="info">
      <div className="info-section">
        <h1>¿Qué es Horizonte Europa?</h1>
        <p>Horizonte Europa es el principal programa de financiación de la Unión Europea para la investigación y la innovación durante el periodo 2021–2027.</p>
        <p>Su objetivo es impulsar el desarrollo científico y tecnológico, fomentar la competitividad y dar respuesta a los grandes retos sociales, como el cambio climático, la transición digital o la sostenibilidad. A través de este programa, la Comisión Europea financia proyectos colaborativos en los que participan universidades, centros de investigación, empresas y otras organizaciones de distintos países.</p>
        <p>Las propuestas que se presentan a Horizonte Europa son evaluadas por expertos independientes siguiendo criterios estrictos, lo que hace que la preparación de estas propuestas sea un proceso complejo y altamente competitivo.</p>
      </div>

      <div className="info-section">
        <h1>De propuesta a proyecto financiado</h1>
        <p>Las propuestas que superan el proceso de evaluación se convierten en proyectos financiados por la Unión Europea, con impacto real en distintos ámbitos científicos, tecnológicos e industriales.</p>
        <p>Estos proyectos suelen implicar consorcios internacionales y generan resultados que pueden traducirse en avances científicos, nuevos productos, mejoras sociales o soluciones a problemas globales.</p>
        <p>A continuación, se muestran ejemplos reales de proyectos financiados en el marco de Horizonte Europa, obtenidos a partir de fuentes oficiales:</p>
      </div>

      <div className="info-section">
        <h1>¿Por qué es importante una buena propuesta?</h1>
        <p>Dado el alto nivel de competencia, una propuesta mal estructurada o poco alineada con los criterios de evaluación tiene pocas probabilidades de ser financiada.</p>
        <p>Por ello, herramientas como HE-CHECK permiten anticipar posibles debilidades y mejorar la calidad de las propuestas antes de su presentación, aumentando así sus probabilidades de éxito.</p>
      </div>

      <div className="proposals-section">
        <h1>Ejemplos de proyectos financiados</h1>
        <div className="proposal">
          <h2>Proyecto A: "Innovación en Energías Renovables"</h2>
          <p><strong>Descripción:</strong> Este proyecto se centra en el desarrollo de tecnologías avanzadas para la generación de energía a partir de fuentes renovables, con el objetivo de reducir la dependencia de los combustibles fósiles y mitigar el cambio climático.</p>
          <p><strong>Resultados:</strong> El proyecto ha logrado avances significativos en la eficiencia de paneles solares y turbinas eólicas, contribuyendo a la transición energética en Europa.</p>
        </div>
      </div>
    </div>
  )
}