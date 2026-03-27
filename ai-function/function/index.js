import { readFileSync } from 'fs'
import path from 'path'

const promptPath = path.join(process.cwd(), 'prompt', 'prompt.txt')
const template = readFileSync(promptPath, 'utf8')

const buildPrompt = (template, data) => {
    let result = template

    Object.keys(data).forEach(key => {
        const value = (data[key] || '').toString()
        result = result.replaceAll(`{{${key}}}`, value)
    })

    return result
}

export default async function (context, req) {
    try {
        const data = req.body

        if (!data || Object.keys(data).length === 0) {
            context.res = {
                status: 400,
                body: { input_error: 'Faltan datos obligatorios en la petición.' }
            }
            return
        }

        const finalPrompt = buildPrompt(template, data)

        const response = await fetch(process.env.GEMINI_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': process.env.GEMINI_API_KEY
            },
            body: JSON.stringify({
                "contents": [{
                    "parts": [{ "text": finalPrompt }]
                }]
            })
        })

        const aiData = await response.json()

        const rawText =
            aiData.candidates?.[0]?.content?.parts?.[0]?.text || ''

        const cleanText = rawText
            .replace(/```json/g, '')
            .replace(/```/g, '')
            .trim()

        let parsed

        parsed = JSON.parse(cleanText)

        context.res = {
            status: 200,
            body: parsed
        }

    } catch (error) {
        context.log('index.js (Azure Functions) error - ', error)
        context.res = {
            status: 500,
            body: {
                input_error: 'Error interno del servidor. Por favor, inténtalo de nuevo más tarde.',
            }
        }
    }
}


