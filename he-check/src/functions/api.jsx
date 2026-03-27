export default async function sendProposalDataToApi(formData) {
    try {
        const response = await fetch(`${process.env.AZURE_FUNCTION_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        return data;

    } catch (error) {
        console.error('Api.jsx error - ', error);
        return { input_error: 'Error al enviar los datos. Por favor, inténtalo de nuevo más tarde.' };
    }
};