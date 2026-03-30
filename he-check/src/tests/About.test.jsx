import { render, screen } from '@testing-library/react'
import About from '../About/About'

describe('About', () => {
  it('renderiza las secciones de información del autor y del framework', () => {
    render(<About />)

    expect(screen.getByText('Sobre el autor')).toBeInTheDocument()
    expect(screen.getByText('Relación con el framework FRONDA')).toBeInTheDocument()
    expect(screen.getByText('Enlaces de interés')).toBeInTheDocument()
  })

  it('renderiza los enlaces externos con información del repositorio y el perfil del autor', () => {
    render(<About />)

    expect(
      screen.getByRole('link', { name: 'Repositorio en GitHub' })
    ).toHaveAttribute('href', 'https://github.com/ASoult10/HE-CHECK')

    expect(
      screen.getByRole('link', { name: 'Perfil de LinkedIn' })
    ).toHaveAttribute('href', 'https://www.linkedin.com/in/alejandro-soult-toscano')
  })
})