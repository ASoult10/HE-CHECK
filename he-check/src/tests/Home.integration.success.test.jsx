import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Home from '../Home/Home'

const SUCCESS_RESPONSE_MOCK = {
    total: {
        score: 15,
        comment: 'integracion-total-comment'
    },
    excellence: {
        score: 5,
        comment: 'integracion-excellence-comment'
    },
    impact: {
        score: 5,
        comment: 'integracion-impact-comment'
    },
    implementation: {
        score: 5,
        comment: 'integracion-implementation-comment'
    }
}

describe('Home (Integración - Éxito)', () => {
    it('muestra resultados correctos cuando la API responde correctamente sin input_error', async () => {
        process.env.VITE_AZURE_FUNCTION_ENDPOINT = 'https://he-check-function.azure.net/api/analyzeProposal'
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: async () => SUCCESS_RESPONSE_MOCK
        })

        render(<Home />)

        const textareas = screen.getAllByRole('textbox')
        textareas.forEach((textarea, index) => {
            fireEvent.change(textarea, { target: { value: `integracion-${index + 1}` } })
        })

        fireEvent.click(screen.getByRole('button', { name: 'Analizar' }))

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledTimes(1)
        })

        expect(global.fetch).toHaveBeenCalledWith(
            'https://he-check-function.azure.net/api/analyzeProposal',
            expect.objectContaining({ method: 'POST' })
        )

        expect(await screen.findByText('integracion-excellence-comment')).toBeInTheDocument()
        expect(await screen.findByText('integracion-impact-comment')).toBeInTheDocument()
        expect(await screen.findByText('integracion-implementation-comment')).toBeInTheDocument()
        expect(await screen.findByText('integracion-total-comment')).toBeInTheDocument()
    })
})