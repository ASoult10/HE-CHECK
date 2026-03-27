import { render, screen } from '@testing-library/react'
jest.mock('../functions/api', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue({})
}))
import App from '../App/App'

describe('App', () => {
  it('Probar que la página principal se renderiza correctamente', () => {
    render(<App />)

    expect(screen.getByText('¿Qué es HE-CHECK?')).toBeInTheDocument()
  })
})
