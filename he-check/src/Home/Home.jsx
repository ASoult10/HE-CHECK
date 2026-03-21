import './Home.css'
import { useState } from 'react'
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

    async function handleAnalyze() {
        setLoading(true);
        try {
            const res = await sendProposalDataToApi(form);
            setResult(res || 'Error de conexión. Inténtalo de nuevo más tarde.');
        } catch (err) {
            console.error('Analyze error', err);
            setResult('Error: ' + (err?.message || 'Error desconocido. Inténtalo de nuevo más tarde.'));
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

    return (
        <div className="home">
            <div className="info-section">
                <h1>¿Qué es HE-CHECK?</h1>
                <p>HE-CHECK es una herramienta de apoyo diseñada para evaluar propuestas de proyectos en el contexto del programa Horizonte Europa de la Comisión Europea.</p>
                <p>Su objetivo es proporcionar una valoración automatizada basada en los tres criterios oficiales de evaluación: excelencia, impacto y calidad de la implementación. A partir de la información introducida por el usuario, la herramienta genera un análisis crítico que simula el enfoque utilizado por evaluadores expertos.</p>
                <p>HE-CHECK no sustituye una evaluación oficial, sino que actúa como un complemento que permite identificar debilidades, mejorar la calidad de las propuestas y prepararlas de forma más sólida antes de su presentación.</p>
                <button onClick={() => document.getElementsByClassName('tool')[0].scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                    Probar ahora
                </button>
            </div>

            <div className="info-section">
                <h1>¿Cómo funciona?</h1>
                <p>HE-CHECK usa Inteligencia Artificial para realizar un análisis de las propuestas del programa Horizonte Europa, de forma que introduciendo la información clave de una propuesta, la herramienta predice una valoración automatizada. Su funcionamiento es sencillo e intuitivo:</p>
                <div className="steps">
                    <p>1. Introduce la información clave de tu propuesta, incluyendo el topic, objetivos, metodología, impacto esperado y composición del consorcio.</p>
                    <p>2. Lanza la evaluación automática desde la aplicación.</p>
                    <p>3. Recibe un análisis estructurado con puntuaciones y comentarios para cada uno de los criterios principales.</p>
                </div>
                <p>Para obtener resultados más precisos, es importante proporcionar información clara, completa y bien estructurada. Cuanto mayor sea la calidad de los datos de entrada, más útil será la evaluación generada.</p>
            </div>

            <div className="info-section">
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
                        <h2>Resultado</h2>
                        {!loading && !result && <p>Aquí aparecerá el análisis</p>}
                        {loading && <p className="loading">Analizando documento...</p>}
                        {!loading && result && <p>{result}</p>}
                        {result && <button onClick={handleReset}>Resetear</button>}
                    </div>
                }
            </div>
        </div>
    )
}