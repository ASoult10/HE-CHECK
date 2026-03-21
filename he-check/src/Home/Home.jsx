import './Home.css'
import { useState, useRef } from 'react'

export default function Home() {

    const [inputText, setInputText] = useState('')
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)

    const textAreaRef = useRef(null)

    const handleAnalyze = () => {
        setLoading(true)
        setTimeout(() => {
            setResult(`Hola`)
            setLoading(false)
        }, 1500)
    }

    const handleInputHeight = (e) => {
        setInputText(textAreaRef.current.value)
        textAreaRef.current.style.height = 'auto'
        textAreaRef.current.style.height = `${e.target.scrollHeight}px`
    }

    const handleReset = () => {
        setInputText('')
        setResult('')
        if (textAreaRef.current) textAreaRef.current.style.height = 'auto'
    }

    return (
        <div className="home">
            <div className="section-1">
                <h1>¿Qué es HE-CHECK?</h1>
                <p>HE-CHECK es una herramienta de apoyo diseñada para evaluar propuestas de proyectos en el contexto del programa Horizonte Europa de la Comisión Europea.</p>
                <p>Su objetivo es proporcionar una valoración automatizada basada en los tres criterios oficiales de evaluación: excelencia, impacto y calidad de la implementación. A partir de la información introducida por el usuario, la herramienta genera un análisis crítico que simula el enfoque utilizado por evaluadores expertos.</p>
                <p>HE-CHECK no sustituye una evaluación oficial, sino que actúa como un complemento que permite identificar debilidades, mejorar la calidad de las propuestas y prepararlas de forma más sólida antes de su presentación.</p>
                <button onClick={() => document.getElementsByClassName('tool')[0].scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                    Probar ahora
                </button>
            </div>

            <div className="section-2">
                <h1>¿Cómo funciona?</h1>
                <p>HE-CHECK usa Inteligencia Artificial para realizar un análisis de las propuestas del programa Horizonte Europa, de forma que introduciendo la información clave de una propuesta, la herramienta predice una valoración automatizada. Su funcionamiento es sencillo e intuitivo:</p>
                <div className="steps">
                    <p>1. Introduce la información clave de tu propuesta, incluyendo el topic, objetivos, metodología, impacto esperado y composición del consorcio.</p>
                    <p>2. Lanza la evaluación automática desde la aplicación.</p>
                    <p>3. Recibe un análisis estructurado con puntuaciones y comentarios para cada uno de los criterios principales.</p>
                </div>
                <p>Para obtener resultados más precisos, es importante proporcionar información clara, completa y bien estructurada. Cuanto mayor sea la calidad de los datos de entrada, más útil será la evaluación generada.</p>
            </div>

            <div className="section-3">
                <h1>¿Cómo interpretar los resultados?</h1>
                <p>HE-CHECK evalúa las propuestas siguiendo los tres criterios principales del programa Horizonte Europa, tal y como lo haría un experto en evaluación de propuestas:</p>
                <div className="steps">
                    <p>1. Excelencia: analiza la claridad de los objetivos, el grado de innovación y la solidez científica o técnica de la propuesta.</p>
                    <p>2. Impacto: evalúa el potencial del proyecto para generar beneficios relevantes a nivel científico, económico o social, así como la credibilidad de las vías para alcanzarlos.</p>
                    <p>3. Calidad y eficiencia de la implementación: examina el plan de trabajo, la gestión del proyecto, la asignación de recursos y la capacidad del consorcio.</p>
                </div>
                <p>Cada criterio se puntúa de 0 a 5, y la suma total permite obtener una valoración global sobre 15 puntos. Además, para cada uno se proporcionan comentarios específicos, basándose en los distintos aspectos que realmente revisan los evaluadores del programa.</p>
                <p>Aunque HE-CHECK proporciona una evaluación automatizada, es importante recordar que esta no es determinista y debe ser utilizada como una herramienta de apoyo en lugar de una decisión final.</p>
            </div>

            <div className="tool">
                <div className="input-box">
                    <h2>Texto de entrada</h2>
                    <textarea
                        ref={textAreaRef}
                        placeholder="Introduce el texto a analizar..."
                        value={inputText}
                        onChange={handleInputHeight}
                    />
                    <div className="input-buttons">
                        <button onClick={handleAnalyze}>Analizar</button>
                        <button onClick={handleReset}>Resetear</button>
                    </div>
                </div>

                <div className="output-box">
                    <h2>Resultado</h2>
                    {!loading && !result && <p>Aquí aparecerá el análisis</p>}
                    {loading && <p className="loading">Analizando documento...</p>}
                    {!loading && result && <p>{result}</p>}
                </div>
            </div>
        </div>
    )
}