import { render, screen } from '@testing-library/react'
import App from '../App/App'

describe('App', () => {
  it('Probar que la página principal se renderiza correctamente', () => {
    render(<App />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Bienvenido')).toBeInTheDocument()
  })
})
