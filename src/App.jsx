import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/work/drawing" element={<div>Drawing</div>} />
        <Route path="/work/theatre" element={<div>Theatre</div>} />
        <Route path="/work/logo" element={<div>Logo</div>} />
        <Route path="/work/frontend" element={<div>Frontend</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App