import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Home from '../Home/Home'

describe('Home (Integración - Fallo)', () => {
  it('muestra input_error cuando la API responde con error', async () => {
    process.env.VITE_AZURE_FUNCTION_ENDPOINT = 'https://he-check-function.azure.net/api/analyzeProposal'
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error'
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

    expect(
      await screen.findByText(/Error al enviar los datos\. Por favor, inténtalo de nuevo más tarde\./)
    ).toBeInTheDocument()
    expect(await screen.findByText(/500 - Internal Server Error/)).toBeInTheDocument()
  })
})