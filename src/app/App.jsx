// REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import Home from '../Pages/Home/Home'
import Employee from '../Pages/Employee/Employee'
import Error404 from '../Pages/Error404/Error404'

// CSS
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
