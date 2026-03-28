export default async function sendProposalDataToApi(formData) {
    const endpoint = import.meta.env.VITE_AZURE_FUNCTION_ENDPOINT;
    try {
        const response = await fetch(`${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const responseStatus = response.status;
            const errorText = response.statusText;
            return { 
                input_error: 'Error al enviar los datos. Por favor, inténtalo de nuevo más tarde.\nDetalles del error: ' + responseStatus + ' - ' + errorText 
            };
        }

        const data = await response.json();

        return data;

    } catch (error) {
        console.error('Api.jsx error - ', error);
        return { 
            input_error: 'Error al enviar los datos. Por favor, inténtalo de nuevo más tarde.' 
        };
    }
};