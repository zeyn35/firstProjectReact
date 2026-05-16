import './App.css'
import Main from './pages/Main'
import Education from './pages/Education'
import { Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth'
import ProductPage from './pages/ProductPage'
import NewProduct from './pages/NewProduct'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path='/edu' element={<Education/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path="/product/:id" element={<ProductPage/>}/>
      <Route path='/newproduct' element={<NewProduct/>}/>
    </Routes>
  )
}

export default App
