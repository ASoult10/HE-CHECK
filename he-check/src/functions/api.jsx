//import { readFileSync } from 'fs'
//import { fileURLToPath } from 'url'
//import { dirname, join } from 'path'

//const __dirname = dirname(fileURLToPath(import.meta.url))
//const prompt = readFileSync(join(__dirname, '..', 'prompt', 'prompt.txt'), 'utf8')
const prompt = `TODO: Poner prompt aquí`
const API_URL = ''; // TODO: Poner URL de Function de Azure

export default async function sendProposalDataToApi (formData) {

    // TODO: Inyectar datos de form en prompt

    return 'Esta funcionalidad aún no está implementada. Esperemos que pronto podamos ofrecer una demo funcional de HE-CHECK. Mientras tanto, puedes consultar el código fuente del proyecto en GitHub para ver cómo se está desarrollando esta herramienta de apoyo para la evaluación de propuestas en el programa Horizonte Europa.' // TODO: Eliminar esto

    body = {
        "contents": [{
            "parts": [{ "text": prompt }]
        }]
    }

    try {

        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error sending form data:', error);
        throw error;
    }
};