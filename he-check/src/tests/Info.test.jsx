import { render, screen } from '@testing-library/react'
import Info from '../Info/Info'

describe('Info', () => {
  it('renderiza las secciones de información de Horizonte Europa', () => {
    render(<Info />)

    expect(screen.getByText('¿Qué es Horizonte Europa?')).toBeInTheDocument()
    expect(screen.getByText('De propuesta a proyecto financiado')).toBeInTheDocument()
    expect(screen.getByText('¿Por qué es importante una buena propuesta?')).toBeInTheDocument()
    expect(screen.getByText('Más información')).toBeInTheDocument()
  })

  it('renderiza los enlaces externos con información adicional del programa', () => {
    render(<Info />)

    expect(
      screen.getByRole('link', { name: 'Explicación del programa Horizonte Europa' })
    ).toHaveAttribute('href', 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en')

    expect(
      screen.getByRole('link', { name: 'EU Funding & Tenders Portal' })
    ).toHaveAttribute('href', 'https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home')
  })
})