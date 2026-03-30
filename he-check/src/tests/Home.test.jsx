import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import sendProposalDataToApi from '../functions/api'
import Home from '../Home/Home'

jest.mock('../functions/api', () => ({
  __esModule: true,
  default: jest.fn()
}))

const API_RESPONSE_MOCK = {
  total: {
    score: 15,
    comment: 'valor-total-comment'
  },
  excellence: {
    score: 5,
    comment: 'valor-excellence-comment'
  },
  impact: {
    score: 5,
    comment: 'valor-impact-comment'
  },
  implementation: {
    score: 5,
    comment: 'valor-implementation-comment'
  }
}

describe('Home', () => {
  it('renderiza las secciones de información y el formulario de propuesta', () => {
    render(<Home />)

    expect(screen.getByText('¿Qué es HE-CHECK?')).toBeInTheDocument()
    expect(screen.getByText('¿Cómo funciona?')).toBeInTheDocument()
    expect(screen.getByText('Información de la propuesta')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Analizar' })).toBeInTheDocument()
  })

  it('envía los datos al pulsar el botón de "Analizar" y muestra la respuesta mockeada de la API', async () => {
    sendProposalDataToApi.mockResolvedValue(API_RESPONSE_MOCK)

    render(<Home />)

    const textareas = screen.getAllByRole('textbox')
    textareas.forEach((textarea, index) => {
      fireEvent.change(textarea, { target: { value: `valor-${index + 1}` } })
    })

    fireEvent.click(screen.getByRole('button', { name: 'Analizar' }))

    await waitFor(() => {
      expect(sendProposalDataToApi).toHaveBeenCalledTimes(1)
    })

    expect(sendProposalDataToApi).toHaveBeenCalledWith({
      topic: 'valor-1',
      title: 'valor-2',
      actionType: 'valor-3',
      duration: 'valor-4',
      budget: 'valor-5',
      summary: 'valor-6',
      objectives: 'valor-7',
      methodology: 'valor-8',
      impact: 'valor-9',
      consortium: 'valor-10'
    })

    expect(screen.getByText('valor-excellence-comment')).toBeInTheDocument()
    expect(screen.getByText('valor-impact-comment')).toBeInTheDocument()
    expect(screen.getByText('valor-implementation-comment')).toBeInTheDocument()
    expect(screen.getByText('valor-total-comment')).toBeInTheDocument()
  })
})