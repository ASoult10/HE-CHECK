import { render, screen } from '@testing-library/react'
import App from '../App/App'

describe('App', () => {
  it('renders main heading and counter button', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /get started/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument()
  })
})
