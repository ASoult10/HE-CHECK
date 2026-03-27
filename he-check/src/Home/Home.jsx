import './Home.css'
import { useState, useEffect } from 'react'
import sendProposalDataToApi from '../functions/api'

export default function Home() {
    const initialForm = {
        topic: '',
        title: '',
        actionType: '',
        duration: '',
        budget: '',
        summary: '',
        objectives: '',
        methodology: '',
        impact: '',
        consortium: ''
    }

    const [form, setForm] = useState(initialForm)
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)
    const [copySuccess, setCopySuccess] = useState(false)

    const handleScrollingToTool = () => {
        const el = document.querySelector('.tool')
        if (el) {
            const header = document.querySelector('.app-nav')
            const headerHeight = header ? header.getBoundingClientRect().height : 0
            const margin = 8
            const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - margin
            window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
        }
    }

    useEffect(() => {
        if (!loading && result) handleScrollingToTool()
    }, [result, loading])

    const handleAnalyze = async () => {
        const emptyFields = Object.entries(form).filter(([key, value]) => !value.trim()).map(([key]) => key)
        if (emptyFields.length > 0) {
            setResult({ input_error: "Por favor, completa todos los campos antes de enviar" })
            return
        }
        setLoading(true);
        try {
            const res = await sendProposalDataToApi(form);
            setResult(res);
        } catch (err) {
            console.error('Home.jsx error - ', err);
        } finally {
            setLoading(false);
        }
    }

    const handleInputChange = (field) => (e) => {
        const value = e.target.value
        setForm(prev => ({ ...prev, [field]: value }))
        e.target.style.height = 'auto'
        e.target.style.height = `${e.target.scrollHeight}px`
    }

    const handleReset = () => {
        setForm(initialForm)
        setResult('')
        document.querySelectorAll('.input-box textarea').forEach(t => {
            t.style.height = 'auto'
        })
    }

    const getIcon = (score, max) => {
        const ratio = score / max
        if (ratio >= 0.8) return '✅'
        if (ratio >= 0.5) return '⚠️'
        return '❌'
    }

    const handleCopy = () => {
        const text = typeof result === 'string' ? result : JSON.stringify(result, null, 2)
        navigator.clipboard.writeText(text)
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(false), 2000)
    }

    return (
        <div className="home">
            <div className="info-section">
                <h1>¿Qué es HE-CHECK?</h1>
                <p>HE-CHECK es una herramienta de apoyo diseñada para evaluar propuestas de proyectos en el contexto del programa Horizonte Europa de la Comisión Europea.</p>
                <p>Su objetivo es proporcionar una valoración automatizada basada en los tres criterios oficiales de evaluación: excelencia, impacto y calidad de la implementación. A partir de la información introducida por el usuario, la herramienta genera un análisis crítico que simula el enfoque utilizado por evaluadores expertos.</p>
                <p>HE-CHECK no sustituye una evaluación oficial, sino que actúa como un complemento que permite identificar debilidades, mejorar la calidad de las propuestas y prepararlas de forma más sólida antes de su presentación.</p>
                <button onClick={handleScrollingToTool}>
                    Probar ahora
                </button>
            </div>

            <div className="info-section">
                <h1>¿Cómo funciona?</h1>
                <p>HE-CHECK usa Inteligencia Artificial para realizar un análisis de las propuestas del programa Horizonte Europa, de forma que introduciendo la información clave de una propuesta, la herramienta predice una valoración automatizada. Su funcionamiento es sencillo e intuitivo:</p>
                <div className="steps">
                    <p>1. Introduce la información clave de tu propuesta, incluyendo aspectos como el topic, objetivos, metodología, impacto esperado y composición del consorcio, entre otros.</p>
                    <p>2. Lanza la evaluación automática desde la aplicación.</p>
                    <p>3. Recibe un análisis estructurado con puntuaciones y comentarios tanto globales como específicos para cada uno de los criterios principales.</p>
                </div>
                <p>Para obtener resultados más precisos, es importante proporcionar información clara, completa y bien estructurada. Cuanto mayor sea la calidad de los datos de entrada, más útil será la evaluación generada.</p>
            </div>

            <div className="info-section">
                <h1>¿Cómo interpretar los resultados?</h1>
                <p>HE-CHECK evalúa las propuestas siguiendo los tres criterios principales del programa Horizonte Europa, tal y como lo haría un experto en evaluación de propuestas:</p>
                <div className="steps">
                    <p><strong>1. Excelencia:</strong> analiza la claridad de los objetivos, el grado de innovación y la solidez científica o técnica de la propuesta.</p>
                    <p><strong>2. Impacto:</strong> evalúa el potencial del proyecto para generar beneficios relevantes a nivel científico, económico o social, así como la credibilidad de las vías para alcanzarlos.</p>
                    <p><strong>3. Calidad y eficiencia de la implementación:</strong> examina el plan de trabajo, la gestión del proyecto, la asignación de recursos y la capacidad del consorcio.</p>
                </div>
                <p>Cada criterio se puntúa de 0 a 5, y la suma total permite obtener una valoración global sobre 15 puntos. Además, para cada uno se proporcionan comentarios específicos, basándose en los distintos aspectos que realmente revisan los evaluadores del programa.</p>
                <p>Aunque HE-CHECK proporciona una evaluación automatizada, es importante recordar que esta no es determinista y debe ser utilizada como una herramienta de apoyo en lugar de una decisión final.</p>
            </div>

            <div className="tool">
                {!loading && !result &&
                    <div className="input-boxes">
                        <h1>Información de la propuesta</h1>
                        <div className="input-box">
                            <h2>Topic de la propuesta</h2>
                            <textarea
                                placeholder="Introduce el texto del topic del portal..."
                                value={form.topic}
                                onChange={handleInputChange('topic')}
                            />
                        </div>
                        <div className="input-box">
                            <h2>Título de la propuesta</h2>
                            <textarea
                                placeholder="Introduce el texto del título de la propuesta..."
                                value={form.title}
                                onChange={handleInputChange('title')}
                            />
                        </div>
                        <div className="input-box">
                            <h2>Tipo de acción</h2>
                            <textarea
                                placeholder="Introduce el texto del tipo de acción (RIA, IA, CSA)..."
                                value={form.actionType}
                                onChange={handleInputChange('actionType')}
                            />
                        </div>
                        <div className="input-box">
                            <h2>Duración en meses</h2>
                            <textarea
                                placeholder="Introduce el período de duración en meses..."
                                value={form.duration}
                                onChange={handleInputChange('duration')}
                            />
                        </div>
                        <div className="input-box">
                            <h2>Presupuesto total</h2>
                            <textarea
                                placeholder="Introduce el período de duración del proyecto en meses..."
                                value={form.budget}
                                onChange={handleInputChange('budget')}
                            />
                        </div>
                        <div className="input-box">
                            <h2>Resumen de la propuesta</h2>
                            <textarea
                                placeholder="Introduce el resumen de la propuesta..."
                                value={form.summary}
                                onChange={handleInputChange('summary')}
                            />
                        </div>
                        <div className="input-box">
                            <h2>Objetivos de la propuesta</h2>
                            <textarea
                                placeholder="Introduce los objetivos de la propuesta..."
                                value={form.objectives}
                                onChange={handleInputChange('objectives')}
                            />
                        </div>
                        <div className="input-box">
                            <h2>Metodología / Plan de trabajo</h2>
                            <textarea
                                placeholder="Introduce el método o plan de trabajo..."
                                value={form.methodology}
                                onChange={handleInputChange('methodology')}
                            />
                        </div>
                        <div className="input-box">
                            <h2>Impacto esperado</h2>
                            <textarea
                                placeholder="Introduce el impacto esperado..."
                                value={form.impact}
                                onChange={handleInputChange('impact')}
                            />
                        </div>
                        <div className="input-box">
                            <h2>Consorcio</h2>
                            <textarea
                                placeholder="Introduce la información del consorcio..."
                                value={form.consortium}
                                onChange={handleInputChange('consortium')}
                            />
                        </div>
                        <div className="input-buttons">
                            <button onClick={handleAnalyze}>Analizar</button>
                            <button onClick={handleReset}>Resetear</button>
                        </div>
                    </div>
                }

                {(loading || result) &&
                    <div className="output-box">
                        <h1>Resultados</h1>
                        {!result.input_error && (
                            <p className="disclaimer">
                                (Esta evaluación es orientativa y no sustituye la evaluación oficial de la Comisión Europea)
                            </p>
                        )}
                        {!loading && !result && <p>Aquí aparecerá el análisis</p>}
                        {loading && <p className="loading">Analizando documento...</p>}
                        {!loading && result && (
                            result.input_error ?
                                <p className='input_error'>{result.input_error}</p> :
                                <div className="result">
                                    <h2><strong>Valoración global:</strong> {result.total.score}/15
                                        {getIcon(result.total.score, 15)}</h2>
                                    <h3><strong>Excelencia:</strong> {result.excellence.score}/5
                                        {getIcon(result.excellence.score, 5)}</h3>
                                    <p>{result.excellence.comment}</p>
                                    <h3><strong>Impacto:</strong> {result.impact.score}/5
                                        {getIcon(result.impact.score, 5)}</h3>
                                    <p>{result.impact.comment}</p>
                                    <h3><strong>Implementación:</strong> {result.implementation.score}/5
                                        {getIcon(result.implementation.score, 5)}</h3>
                                    <p>{result.implementation.comment}</p>
                                    <h3><strong>Conclusiones:</strong></h3>
                                    <p>{result.total.comment}</p>
                                </div>
                        )}
                        <div className="input-buttons">
                            {result && <button onClick={handleReset}>Volver</button>}
                            {result && !result.input_error &&
                                <button style={{ backgroundColor: copySuccess ? 'green' : 'var(--eu-blue-color)' }} onClick={handleCopy}>
                                    {copySuccess ? "¡Copiado!" : "Copiar (JSON)"}
                                </button>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}