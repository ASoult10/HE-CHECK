import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppNav from '../AppNav/AppNav'
import Home from '../Home/Home'
import About from '../About/About'
import Info from '../Info/Info'
import Footer from '../Footer/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <AppNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}