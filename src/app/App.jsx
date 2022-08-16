import Home from '../Pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Employee from '../Pages/Employee/Employee'
import Error404 from '../Pages/Error404/error404'

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
